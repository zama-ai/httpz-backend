mod ops;
mod transaction_sender;

#[derive(Clone, Debug)]
pub struct ConfigSettings {
    pub database_url: String,
    pub database_pool_size: u32,

    pub verify_proof_resp_db_channel: String,
    pub add_ciphertexts_db_channel: String,
    pub allow_handle_db_channel: String,

    pub verify_proof_resp_batch_limit: u32,
    pub verify_proof_resp_max_retries: u32,
    pub verify_proof_remove_after_max_retries: bool,

    pub add_ciphertexts_batch_limit: u32,
    pub add_ciphertexts_max_retries: u32,

    pub allow_handle_batch_limit: u32,
    pub allow_handle_max_retries: u32,

    pub db_polling_interval_secs: u16,

    pub error_sleep_initial_secs: u16,
    pub error_sleep_max_secs: u16,

    pub txn_receipt_timeout_secs: u16,
}

impl Default for ConfigSettings {
    fn default() -> Self {
        Self {
            database_url: std::env::var("DATABASE_URL")
                .unwrap_or("postgres://postgres:postgres@localhost/coprocessor".to_owned()),
            database_pool_size: 10,
            verify_proof_resp_db_channel: "verify_proof_responses".to_owned(),
            add_ciphertexts_db_channel: "add_ciphertexts".to_owned(),
            allow_handle_db_channel: "event_allowed_handle".to_owned(),
            verify_proof_resp_batch_limit: 128,
            verify_proof_resp_max_retries: 15,
            verify_proof_remove_after_max_retries: true,
            db_polling_interval_secs: 5,
            error_sleep_initial_secs: 1,
            error_sleep_max_secs: 16,
            add_ciphertexts_batch_limit: 10,
            add_ciphertexts_max_retries: 15,
            allow_handle_batch_limit: 10,
            allow_handle_max_retries: 10,
            txn_receipt_timeout_secs: 10,
        }
    }
}

use alloy::providers::fillers::{
    BlobGasFiller, CachedNonceManager, ChainIdFiller, GasFiller, JoinFill, NonceFiller,
};
pub use transaction_sender::TransactionSender;

pub const TXN_SENDER_TARGET: &str = "txn_sender";
pub const VERIFY_PROOFS_TARGET: &str = "verify_proofs";
pub const ADD_CIPHERTEXTS_TARGET: &str = "add_ciphertexts";

// Make sure we use a cached nonce manager such that we can send txns concurrently.
// Note: We take the recommended filler types from the `alloy` crate and just change to a `CachedNonceManager`.
pub type ProviderFillers = JoinFill<
    GasFiller,
    JoinFill<BlobGasFiller, JoinFill<NonceFiller<CachedNonceManager>, ChainIdFiller>>,
>;
