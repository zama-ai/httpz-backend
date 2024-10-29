use std::str::FromStr;

use bigdecimal::num_bigint::BigInt;
use tonic::metadata::MetadataValue;

use crate::{
    server::{
        common::FheOperation,
        coprocessor::{
            async_computation_input::Input, fhevm_coprocessor_client::FhevmCoprocessorClient,
            AsyncComputation, AsyncComputationInput, AsyncComputeRequest,
        },
    },
    tests::utils::{
        decrypt_ciphertexts, default_api_key, random_handle, setup_test_app,
        wait_until_all_ciphertexts_computed, DecryptionResult,
    },
};

use super::operators::supported_types;

#[tokio::test]
async fn test_fhe_random_basic() -> Result<(), Box<dyn std::error::Error>> {
    let app = setup_test_app().await?;
    let pool = sqlx::postgres::PgPoolOptions::new()
        .max_connections(2)
        .connect(app.db_url())
        .await?;
    let mut client = FhevmCoprocessorClient::connect(app.app_url().to_string()).await?;

    let mut handle_counter = random_handle();
    let mut next_handle = || {
        let out: u64 = handle_counter;
        handle_counter += 1;
        out.to_be_bytes().to_vec()
    };

    let api_key_header = format!("bearer {}", default_api_key());

    let mut async_computations = Vec::new();
    let mut output_handles = Vec::new();
    // second batch
    let mut repeated_output_handles = Vec::new();
    let mut other_seed_output_handles = Vec::new();

    let random_test_types = supported_types();

    let deterministic_seed = 123u8;
    for the_type in random_test_types {
        let output_handle = next_handle();
        output_handles.push(output_handle.clone());

        async_computations.push(AsyncComputation {
            operation: FheOperation::FheRand.into(),
            output_handle,
            inputs: vec![
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![deterministic_seed])),
                },
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![*the_type as u8])),
                },
            ],
        });
    }

    for the_type in random_test_types {
        let output_handle = next_handle();
        repeated_output_handles.push(output_handle.clone());

        async_computations.push(AsyncComputation {
            operation: FheOperation::FheRand.into(),
            output_handle,
            inputs: vec![
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![deterministic_seed])),
                },
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![*the_type as u8])),
                },
            ],
        });
    }

    let deterministic_seed = 124u8;
    for the_type in random_test_types {
        let output_handle = next_handle();
        other_seed_output_handles.push(output_handle.clone());

        async_computations.push(AsyncComputation {
            operation: FheOperation::FheRand.into(),
            output_handle,
            inputs: vec![
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![deterministic_seed])),
                },
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![*the_type as u8])),
                },
            ],
        });
    }
    println!("Scheduling computations...");
    let mut compute_request = tonic::Request::new(AsyncComputeRequest {
        computations: async_computations,
    });
    compute_request.metadata_mut().append(
        "authorization",
        MetadataValue::from_str(&api_key_header).unwrap(),
    );
    let _resp = client.async_compute(compute_request).await?;
    println!("Computations scheduled, waiting upon completion...");

    wait_until_all_ciphertexts_computed(&app).await?;

    let decrypt_request = output_handles.clone();
    let resp = decrypt_ciphertexts(&pool, 1, decrypt_request).await?;
    let expected: Vec<DecryptionResult> = vec![
        DecryptionResult { value: "true".to_string(), output_type: 0 },
        DecryptionResult { value: "14".to_string(), output_type: 1 },
        DecryptionResult { value: "222".to_string(), output_type: 2 },
        DecryptionResult { value: "16606".to_string(), output_type: 3 },
        DecryptionResult { value: "988233950".to_string(), output_type: 4 },
        DecryptionResult { value: "17726426742889332958".to_string(), output_type: 5 },
        DecryptionResult { value: "95096831748625519397318297902939324638".to_string(), output_type: 6 },
        DecryptionResult { value: "1399147239934657696393352535269648034851377856734".to_string(), output_type: 7 },
        DecryptionResult { value: "48969777095037584338767432630635603497351897034565050559046641215867078525150".to_string(), output_type: 8 },
        DecryptionResult { value: "5672133879802708562062769460366654319040907404569669369250878712726641601293078201378408576635102952424343507606900013668664900968766534158389316556374238".to_string(), output_type: 9 },
        DecryptionResult { value: "114410226683647796805289418347157165421556177542313075040261034050349283333746133758044391125907486214639472868006915368703395208956207333386492400441169537541732419752589713196090985414300923196056906582334036871687847581632894669188198798108581443774738327425973554046487690044338027161262063834091508678878".to_string(), output_type: 10 },
        DecryptionResult { value: "25467131467221889352447766632386825920162086306849479079474003300521331308946323592350894436520833075335200921129880946181368851703118432881146206394209809079609342138464350013730332957427806799788734382905676196753813118791559928400163520766297381306834422421839448600811564925727337403620797889852511246847304334517070464078488035367296596574161807086540525650162518315873919952617981067113303814800084140798312055931333854875147039478663345671463906729533961660604550647954937369209494370427528366578139283958113608230658940368557430929555840901268260704720518922861406075936793090973737181775476689405198209597662".to_string(), output_type: 11 }
    ];

    println!("results: {:#?}", resp);

    assert_eq!(expected, resp);

    let resp_repeated = decrypt_ciphertexts(&pool, 1, repeated_output_handles).await?;
    assert_eq!(
        resp, resp_repeated,
        "randomness generation is not deterministic"
    );

    let resp_repeated = decrypt_ciphertexts(&pool, 1, other_seed_output_handles).await?;
    assert_ne!(resp, resp_repeated, "seed has change, so must the values");

    Ok(())
}

fn to_be_bytes(input: &str) -> Vec<u8> {
    let num = BigInt::from_str(input).unwrap();
    let (_, bytes_be) = num.to_bytes_be();
    bytes_be
}

#[tokio::test]
async fn test_fhe_random_bounded() -> Result<(), Box<dyn std::error::Error>> {
    let app = setup_test_app().await?;
    let pool = sqlx::postgres::PgPoolOptions::new()
        .max_connections(2)
        .connect(app.db_url())
        .await?;
    let mut client = FhevmCoprocessorClient::connect(app.app_url().to_string()).await?;

    let mut handle_counter = random_handle();
    let mut next_handle = || {
        let out: u64 = handle_counter;
        handle_counter += 1;
        out.to_be_bytes().to_vec()
    };

    let api_key_header = format!("bearer {}", default_api_key());

    let mut async_computations = Vec::new();
    let mut output_handles = Vec::new();

    let deterministic_seed = 123u8;
    let bounds = [
        "2",
        "4",
        "128",
        "16384",
        "1073741824",
        "4611686018427387904",
        "85070591730234615865843651857942052864",
        "365375409332725729550921208179070754913983135744",
        "28948022309329048855892746252171976963317496166410141009864396001978282409984",
        "3351951982485649274893506249551461531869841455148098344430890360930441007518386744200468574541725856922507964546621512713438470702986642486608412251521024",
        "44942328371557897693232629769725618340449424473557664318357520289433168951375240783177119330601884005280028469967848339414697442203604155623211857659868531094441973356216371319075554900311523529863270738021251442209537670585615720368478277635206809290837627671146574559986811484619929076208839082406056034304",
        "8079251517827751825178719172167487990111025667428871008032586356881163784716972723299300352880728365922179490230474504873529889787622730273772038096612070780157719341825249022937549437597413026699014409596016892069198054660654939040459523584619042617645411463009076260721893972885266452151888099780982596380478583347417085605171243696641142373714044008831580514519451414832756548177115078537564648216044279181485900929615464339399587788075411476100924403308321807806781421177705052431289275431732830867419635645164174483761499317088249659553881291597359333885900533858307401161329619651238037048388963402764899057664",
    ];
    let results = [
        "true",
        "2",
        "94",
        "222",
        "988233950",
        "3891368687607169246",
        "10026240018390903531474646044997271774",
        "303021011936480507740588910732435770109428449502",
        "20021754785708535482874686378463626534034400868154909549182245213888796115166",
        "2320181897317059287169263210815192787171065949421571024819988351796200593774691457177940002093377095501835543060278500955226430265779891671780904304853214",
        "24525569940532001418824158807705928740657328595197746403545993471482945430995652191690152464703718204079415928071218689874000324548999022140068685121432475352848473040156970557939875613677876136330365106291533987268772240461663228451242242838167825193063072083680404926514067075098169008844385669279396610270",
        "1229376913738633876911609115884361949829009304562866055376244229877839954795405422452993377878647977568662450438457431560779182340250242059830092104373596739136184112988602944917684644635567719691691154117625520546218954809595111278784950012440253453898188032812219818645883007071538047165133590509563457705868584474819207262974304277373169453019675060045784106604164071375650308086635831500609870151951303253854353142487461856948276114437111243161133519608996237184206384421822211915626544132329873975880377022621084779374442417292681950894197026476182703062817321286483872452804232020023070630309799196903512424670",
    ];

    for (idx, the_type) in supported_types().iter().enumerate() {
        let output_handle = next_handle();
        output_handles.push(output_handle.clone());

        async_computations.push(AsyncComputation {
            operation: FheOperation::FheRandBounded.into(),
            output_handle,
            inputs: vec![
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![deterministic_seed])),
                },
                AsyncComputationInput {
                    input: Some(Input::Scalar(to_be_bytes(bounds[idx]))),
                },
                AsyncComputationInput {
                    input: Some(Input::Scalar(vec![*the_type as u8])),
                },
            ],
        });
    }

    println!("Scheduling computations...");
    let mut compute_request = tonic::Request::new(AsyncComputeRequest {
        computations: async_computations,
    });
    compute_request.metadata_mut().append(
        "authorization",
        MetadataValue::from_str(&api_key_header).unwrap(),
    );
    let _resp = client.async_compute(compute_request).await?;
    println!("Computations scheduled, waiting upon completion...");

    wait_until_all_ciphertexts_computed(&app).await?;

    let decrypt_request = output_handles.clone();
    let resp = decrypt_ciphertexts(&pool, 1, decrypt_request).await?;
    assert_eq!(resp.len(), bounds.len());

    println!("response: {:#?}", resp);
    for idx in 0..bounds.len() {
        assert_eq!(resp[idx].output_type, supported_types()[idx] as i16);
        assert_eq!(resp[idx].value, results[idx]);
        // skip boolean bounds check
        if resp[idx].output_type > 0 {
            assert!(BigInt::from_str(bounds[idx]).unwrap().gt(&BigInt::from_str(&resp[idx].value).unwrap()));
        }
    }

    Ok(())
}
