use std::fs::read;

use tfhe::{
    generate_keys, set_server_key,
    shortint::parameters::{
        list_compression::COMP_PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64,
        PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64,
    },
    zk::{
        CanonicalDeserialize, CanonicalSerialize, CompactPkeCrs, CompactPkePublicParams, Compress,
        Validate,
    },
    ClientKey, CompactPublicKey, ConfigBuilder, ServerKey,
};

pub const MAX_BITS_TO_PROVE: usize = 2048;

pub struct FhevmKeys {
    pub server_key: ServerKey,
    pub client_key: Option<ClientKey>,
    pub compact_public_key: CompactPublicKey,
    pub public_params: CompactPkePublicParams,
}

pub struct SerializedFhevmKeys {
    pub server_key: Vec<u8>,
    pub client_key: Option<Vec<u8>>,
    pub compact_public_key: Vec<u8>,
    pub public_params: Vec<u8>,
}

impl FhevmKeys {
    pub fn new() -> Self {
        println!("Generating keys...");
        let config =
            ConfigBuilder::with_custom_parameters(PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64)
                .enable_compression(COMP_PARAM_MESSAGE_2_CARRY_2_KS_PBS_TUNIFORM_2M64)
                .build();
        let (client_key, server_key) = generate_keys(config);
        let compact_public_key = CompactPublicKey::new(&client_key);
        let crs = CompactPkeCrs::from_config(config, MAX_BITS_TO_PROVE).expect("CRS creation");
        FhevmKeys {
            server_key,
            client_key: Some(client_key),
            compact_public_key,
            public_params: crs.public_params().clone(),
        }
    }

    pub fn set_server_key_for_current_thread(&self) {
        set_server_key(self.server_key.clone());
    }
}

impl SerializedFhevmKeys {
    const DIRECTORY: &'static str = "../fhevm-keys";
    const SKS: &'static str = "../fhevm-keys/sks";
    const CKS: &'static str = "../fhevm-keys/cks";
    const PKS: &'static str = "../fhevm-keys/pks";
    const PUBLIC_PARAMS: &'static str = "../fhevm-keys/pp";

    pub fn save_to_disk(self) {
        println!("Creating directory {}", Self::DIRECTORY);
        std::fs::create_dir_all(Self::DIRECTORY).expect("create keys directory");

        println!("Creating file {}", Self::SKS);
        std::fs::write(format!("{}", Self::SKS), self.server_key).expect("write sks");

        if self.client_key.is_some() {
            println!("Creating file {}", Self::CKS);
            std::fs::write(format!("{}", Self::CKS), self.client_key.unwrap()).expect("write cks");
        }

        println!("Creating file {}", Self::PKS);
        std::fs::write(format!("{}", Self::PKS), self.compact_public_key).expect("write pks");

        println!("Creating file {}", Self::PUBLIC_PARAMS);
        std::fs::write(format!("{}", Self::PUBLIC_PARAMS), self.public_params)
            .expect("write public params");
    }

    pub fn load_from_disk() -> Self {
        let server_key = read(Self::SKS).expect("read server key");
        let client_key = read(Self::CKS);
        let compact_public_key = read(Self::PKS).expect("read compact public key");
        let public_params = read(Self::PUBLIC_PARAMS).expect("read public params");
        SerializedFhevmKeys {
            server_key,
            client_key: client_key.ok(),
            compact_public_key,
            public_params,
        }
    }
}

impl From<FhevmKeys> for SerializedFhevmKeys {
    fn from(f: FhevmKeys) -> Self {
        let mut public_params = vec![];
        f.public_params
            .serialize_with_mode(&mut public_params, Compress::No)
            .expect("serialize public params");
        SerializedFhevmKeys {
            server_key: bincode::serialize(&f.server_key).expect("serialize server key"),
            client_key: f
                .client_key
                .map(|c| bincode::serialize(&c).expect("serialize client key")),
            compact_public_key: bincode::serialize(&f.compact_public_key)
                .expect("serialize compact public key"),
            public_params,
        }
    }
}

impl From<SerializedFhevmKeys> for FhevmKeys {
    fn from(f: SerializedFhevmKeys) -> Self {
        let public_params = CompactPkePublicParams::deserialize_with_mode(
            &*f.public_params,
            Compress::No,
            Validate::No,
        )
        .expect("deserialize public params");
        FhevmKeys {
            server_key: bincode::deserialize(&f.server_key).expect("deserialize server key"),
            client_key: f
                .client_key
                .map(|c| bincode::deserialize(&c).expect("deserialize client key")),
            compact_public_key: bincode::deserialize(&f.compact_public_key)
                .expect("deserialize compact public key"),
            public_params,
        }
    }
}
