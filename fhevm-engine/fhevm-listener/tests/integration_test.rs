use std::sync::atomic::AtomicU32;
use std::sync::atomic::Ordering;

use alloy::network::EthereumWallet;
use alloy::node_bindings::Anvil;
use alloy::signers::local::PrivateKeySigner;
use alloy::sol;

use alloy_primitives::U256;
use alloy_provider::{Provider, ProviderBuilder, WsConnect};

use alloy_rpc_types::TransactionRequest;
use serial_test::serial;
use sqlx::postgres::PgPoolOptions;

use fhevm_listener::cmd::main;
use fhevm_listener::cmd::Args;
use fhevm_listener::database::tfhe_event_propagate::{Database, ToType};

sol!(
    #[sol(rpc)]
    #[derive(Debug, serde::Serialize, serde::Deserialize)]
    TFHEExecutorTest,
    "artifacts/TFHEExecutorTest.sol/TFHEExecutorTest.json"
);

use crate::TFHEExecutorTest::TFHEExecutorTestInstance;

const NB_EVENTS: i64 = 30;

async fn emit_events<P, N>(wallet: &EthereumWallet, url: &String, tfhe_contract: TFHEExecutorTestInstance<(), P, N>)
where
      P: Clone + alloy_provider::Provider<N> + 'static,
      N: Clone + alloy_provider::Network<TransactionRequest = TransactionRequest> + 'static,
{
    static UNIQUE_INT: AtomicU32 = AtomicU32::new(1); // to counter avoid idempotency
    let url_clone = url.clone();
    let wallet_clone = wallet.clone();
    tokio::spawn(async move {
        let provider = ProviderBuilder::new()
            .wallet(wallet_clone)
            .on_ws(WsConnect::new(url_clone))
            .await
            .unwrap();
        let to_type = ToType::from_slice(&[1]);
        for i in 1..=NB_EVENTS {
            let pt = U256::from(UNIQUE_INT.fetch_add(1, Ordering::Relaxed));
            let txn_req = tfhe_contract
                .trivialEncrypt_1(pt.clone(), to_type.clone())
                .into_transaction_request()
                .into();
            let pending_txn = provider.send_transaction(txn_req).await.unwrap();
            let receipt = pending_txn.get_receipt().await.unwrap();
            assert!(receipt.status());
        }
    })
    .await
    .unwrap();
}


#[tokio::test]
#[serial(db)]
async fn test_listener_restart() -> Result<(), anyhow::Error> {
    let anvil = Anvil::new().block_time(1).try_spawn()?;
    let chain_id = anvil.chain_id();
    let signer: PrivateKeySigner = anvil.keys()[0].clone().into();
    let wallet = EthereumWallet::new(signer.clone());
    let url = anvil.ws_endpoint();

    let database_url = "postgresql://postgres:postgres@localhost:5432/coprocessor";

    let db_pool = PgPoolOptions::new().max_connections(1).connect(database_url).await?;

    sqlx::query!("TRUNCATE computations").execute(&db_pool).await?;
    sqlx::query!("TRUNCATE blocks_seen").execute(&db_pool).await?;
    let count = sqlx::query!("SELECT COUNT(*) FROM computations")
        .fetch_one(&db_pool)
        .await?
        .count
        .unwrap_or(0);
    assert_eq!(count, 0);


    let coprocessor_api_key = Some(
        sqlx::query!("SELECT tenant_api_key FROM tenants LIMIT 1")
        .fetch_one(&db_pool)
        .await?
        .tenant_api_key
    );

    let provider = ProviderBuilder::new()
        .wallet(wallet)
        .on_ws(WsConnect::new(url.clone()))
        .await?;
    let tfhe_contract = TFHEExecutorTest::deploy(provider.clone()).await?;
    let args = Args {
        url: url.clone(),
        ignore_tfhe_events: false,
        ignore_acl_events: false,
        acl_contract_address: None,
        tfhe_contract_address: None,
        database_url: database_url.into(),
        coprocessor_api_key,
        start_at_block: None,
        end_at_block: None,
        catchup_margin: 5,
    };

    // Start listener in background task
    let listener_handle = tokio::spawn(main(args.clone()));

    tokio::time::sleep(tokio::time::Duration::from_secs(1)).await;

    // Emit first batch of events
    let wallet = EthereumWallet::new(signer.clone());

    emit_events(&wallet, &url, tfhe_contract.clone()).await;

    // Kill the listener
    listener_handle.abort();
    let mut database = Database::new(&database_url, &coprocessor_api_key.unwrap(), chain_id).await;
    let last_block = database.read_last_seen_block().await;
    assert!(last_block.is_some());
    assert!(last_block.unwrap() > 1);

    // Emit second batch
    emit_events(&wallet, &url, tfhe_contract.clone()).await;

    // Restart listener
    let listener_handle = tokio::spawn(main(args.clone()));

    // Continue with events
    emit_events(&wallet, &url, tfhe_contract.clone()).await;

    // Give time for events to be processed
    tokio::time::sleep(tokio::time::Duration::from_secs(5)).await;

    let db_pool = PgPoolOptions::new().max_connections(1).connect(database_url).await?;

    let count = sqlx::query!("SELECT COUNT(*) FROM computations")
        .fetch_one(&db_pool)
        .await?
        .count
        .unwrap_or(0);

    assert_eq!(count, 3 * NB_EVENTS);
    // Cleanup
    listener_handle.abort();
    Ok(())
}
