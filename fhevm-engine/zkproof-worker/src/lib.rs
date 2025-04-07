pub mod auxiliary;

#[cfg(test)]
mod tests;

pub mod verifier;
use std::io;

use fhevm_engine_common::types::FhevmError;
use thiserror::Error;

/// A batch can contain up to 254 inputs.
///
/// - Each computed handle stores its ciphertext index in a single byte.
/// - The value 255 (0xFF) is reserved for handles produced by FHE operations.
pub const MAX_NUMBER_OF_INPUTS: u8 = 255 - 1;

#[derive(Error, Debug)]
pub enum ExecutionError {
    #[error("Database error: {0}")]
    DbError(#[from] sqlx::Error),

    #[error("Connection to PostgreSQL is lost")]
    LostDbConnection,

    #[error("Serialization error: {0}")]
    SerializationError(#[from] bincode::Error),

    #[error("IO error: {0}")]
    IOError(#[from] io::Error),

    #[error("Invalid CRS bytes {0}")]
    InvalidCrsBytes(String),

    #[error("Invalid Ciphertext bytes {0}")]
    InvalidCiphertextBytes(String),

    #[error("Invalid Compact Public key bytes {0}")]
    InvalidPkBytes(String),

    #[error("Invalid Proof({0})")]
    InvalidProof(i64),

    #[error("Fhevm error: {0}")]
    FaildFhevm(#[from] FhevmError),

    #[error("Server keys not found {0}")]
    ServerKeysNotFound(String),

    #[error("Invalid auxiliary data {0}")]
    InvalidAuxData(String),

    #[error("JoinError error: {0}")]
    JoinError(#[from] tokio::task::JoinError),

    #[error("Too many inputs in a batch {0}")]
    TooManyInputs(usize),

    #[error("Empty input list")]
    EmptyInputList,
}

#[derive(Default, Debug, Clone)]
pub struct Config {
    pub database_url: String,
    pub listen_database_channel: String,
    pub notify_database_channel: String,
    pub pg_pool_connections: u32,
    pub pg_polling_interval: u32,

    pub worker_thread_count: u32,
}
