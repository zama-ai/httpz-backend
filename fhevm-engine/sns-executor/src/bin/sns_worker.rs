use sns_executor::{
    compute_128bit_ct, process_s3_uploads, Config, DBConfig, HandleItem, S3Config,
    UPLOAD_QUEUE_SIZE,
};
use tokio::{signal::unix, spawn, sync::mpsc};
use tokio_util::sync::CancellationToken;
mod utils;

fn handle_sigint(token: CancellationToken) {
    tokio::spawn(async move {
        let mut signal = unix::signal(unix::SignalKind::interrupt()).unwrap();
        signal.recv().await;
        token.cancel();
    });
}

fn construct_config() -> Config {
    let args: utils::daemon_cli::Args = utils::daemon_cli::parse_args();

    let db_url = args
        .database_url
        .clone()
        .unwrap_or_else(|| std::env::var("DATABASE_URL").expect("DATABASE_URL is undefined"));

    Config {
        tenant_api_key: args.tenant_api_key,
        db: DBConfig {
            url: db_url,
            listen_channels: args.pg_listen_channels,
            notify_channel: args.pg_notify_channel,
            batch_limit: args.work_items_batch_size,
            polling_interval: args.pg_polling_interval,
            max_connections: args.pg_pool_connections,
        },
        s3: S3Config {
            bucket_ct128: args.bucket_name_ct128,
            bucket_ct64: args.bucket_name_ct64,
        },
    }
}

#[tokio::main]
async fn main() {
    let conf: Config = construct_config();
    let parent = CancellationToken::new();

    tracing_subscriber::fmt().json().with_level(true).init();

    // Handle SIGINIT signals
    handle_sigint(parent.clone());

    // Queue of tasks to upload ciphertexts
    let (uploads_tx, uploads_rx) = mpsc::channel::<HandleItem>(UPLOAD_QUEUE_SIZE);

    let config = conf.clone();
    let token = parent.child_token();

    spawn(async move {
        if let Err(err) = process_s3_uploads(&config, uploads_rx, token).await {
            tracing::error!("Failed to run the upload-worker : {:?}", err);
        }
    });

    // Start the SnS worker
    if let Err(err) = compute_128bit_ct(&conf, uploads_tx, parent.child_token()).await {
        tracing::error!("SnS worker failed: {:?}", err);
    }
}
