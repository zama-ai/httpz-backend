/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  InputVerifier,
  InputVerifierInterface,
} from "../../../contracts/InputVerifier.native.sol/InputVerifier";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "ERC1967InvalidImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1967NonPayable",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "UUPSUnauthorizedCallContext",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "slot",
        type: "bytes32",
      },
    ],
    name: "UUPSUnsupportedProxiableUUID",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "HANDLE_VERSION",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADE_INTERFACE_VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getKMSVerifierAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVersion",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kmsVerifier",
    outputs: [
      {
        internalType: "contract KMSVerifier",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pendingOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "aclAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "userAddress",
            type: "address",
          },
          {
            internalType: "address",
            name: "contractAddress",
            type: "address",
          },
        ],
        internalType: "struct TFHEExecutor.ContextUserInputs",
        name: "context",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "inputHandle",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "inputProof",
        type: "bytes",
      },
    ],
    name: "verifyCiphertext",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405230608052348015610013575f80fd5b5061001c610021565b6100d3565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000900460ff16156100715760405163f92ee8a960e01b815260040160405180910390fd5b80546001600160401b03908116146100d05780546001600160401b0319166001600160401b0390811782556040519081527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50565b6080516119a06100f95f395f8181610f5401528181610f7d01526110e701526119a05ff3fe6080604052600436106100d9575f3560e01c806379ba50971161007c578063c4d66de811610057578063c4d66de81461023c578063e30c39781461025b578063f0ea684d1461026f578063f2fde38b14610296575f80fd5b806379ba5097146101cc5780638da5cb5b146101e0578063ad3cb1cc146101f4575f80fd5b80634f1ef286116100b75780634f1ef2861461016a57806352d1902d1461017f5780636a8c8eb414610193578063715018a6146101b8575f80fd5b806303b031cf146100dd5780630d8e6e2c1461011c5780634d52c1071461013d575b5f80fd5b3480156100e8575f80fd5b5073208de73316e44722e16f6ddff40881a3e4f861045b6040516001600160a01b0390911681526020015b60405180910390f35b348015610127575f80fd5b506101306102b5565b604051610113919061159f565b348015610148575f80fd5b5061015c610157366004611669565b610330565b604051908152602001610113565b61017d610178366004611713565b610bb7565b005b34801561018a575f80fd5b5061015c610bd6565b34801561019e575f80fd5b506101a65f81565b60405160ff9091168152602001610113565b3480156101c3575f80fd5b5061017d610c04565b3480156101d7575f80fd5b5061017d610c17565b3480156101eb575f80fd5b506100ff610c5f565b3480156101ff575f80fd5b506101306040518060400160405280600581526020017f352e302e3000000000000000000000000000000000000000000000000000000081525081565b348015610247575f80fd5b5061017d61025636600461175e565b610c93565b348015610266575f80fd5b506100ff610db5565b34801561027a575f80fd5b506100ff73208de73316e44722e16f6ddff40881a3e4f8610481565b3480156102a1575f80fd5b5061017d6102b036600461175e565b610ddd565b60606040518060400160405280600d81526020017f496e7075745665726966696572000000000000000000000000000000000000008152506102f65f610e62565b6103006001610e62565b6103095f610e62565b60405160200161031c9493929190611777565b604051602081830303815290604052905090565b5f805f61034a8487602001518860400151895f0151610eff565b90925090508460ff601082901c1683610a90578551806103b15760405162461bcd60e51b815260206004820152601060248201527f456d70747920696e70757450726f6f660000000000000000000000000000000060448201526064015b60405180910390fd5b5f875f815181106103c4576103c46117f4565b602001015160f81c60f81b60f81c60ff1690505f886001815181106103eb576103eb6117f4565b016020015160f81c90508382116104345760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064016103a8565b61043f81604161181c565b61044a83602061181c565b610455906002611833565b61045f9190611833565b83116104ad5760405162461bcd60e51b815260206004820152601e60248201527f4572726f7220646573657269616c697a696e6720696e70757450726f6f66000060448201526064016103a8565b5f806104ba83604161181c565b6104c585602061181c565b6104d0906002611833565b6104da9190611833565b90505f6104e78287611846565b90505f8167ffffffffffffffff811115610503576105036115b1565b6040519080825280601f01601f19166020018201604052801561052d576020820181803683370190505b5090505f5b828110156105a8578d6105458286611833565b81518110610555576105556117f4565b602001015160f81c60f81b828281518110610572576105726117f4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a905350600101610532565b50808051906020012093505050505f8267ffffffffffffffff8111156105d0576105d06115b1565b60405190808252806020026020018201604052801561060357816020015b60608152602001906001900390816105ee5790505b5090505f5b8381101561071257604080516041808252608082019092529060208201818036833701905050828281518110610640576106406117f4565b60200260200101819052505f5b6041811015610709578c8161066384604161181c565b61066e89602061181c565b610679906002611833565b6106839190611833565b61068d9190611833565b8151811061069d5761069d6117f4565b602001015160f81c60f81b8383815181106106ba576106ba6117f4565b602002602001015182815181106106d3576106d36117f4565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff191690815f1a90535060010161064d565b50600101610608565b50604080516080810182525f8082526020820181905291810182905260608101919091528d5f0151815f01906001600160a01b031690816001600160a01b031681525050828160200181815250508d6020015181604001906001600160a01b031690816001600160a01b0316815250508d6040015181606001906001600160a01b031690816001600160a01b0316815250505f73208de73316e44722e16f6ddff40881a3e4f861046001600160a01b0316630e66e3f283856040518363ffffffff1660e01b81526004016107e7929190611859565b6020604051808303815f875af1158015610803573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061082791906118f1565b90508061089c5760405162461bcd60e51b815260206004820152602660248201527f4e6f7420656e6f75676820756e69717565204b4d5320696e707574207369676e60448201527f617475726573000000000000000000000000000000000000000000000000000060648201526084016103a8565b5050505f5b83811015610a7d57602081028b016022015160ff8116156109045760405162461bcd60e51b815260206004820152601460248201527f57726f6e672068616e646c652076657273696f6e00000000000000000000000060448201526064016103a8565b60ff601082901c168281146109655760405162461bcd60e51b815260206004820152602160248201527f57726f6e6720696e64657820666f722073657269616c697a65642068616e646c6044820152606560f81b60648201526084016103a8565b5f84846040516020016109a792919091825260f81b7fff0000000000000000000000000000000000000000000000000000000000000016602082015260210190565b604051602081830303815290604052805190602001205f1c90508262ffffff19168162ffffff191614610a1c5760405162461bcd60e51b815260206004820152601a60248201527f57726f6e672068616e646c6520696e20696e70757450726f6f6600000000000060448201526064016103a8565b888403610a7257828a14610a725760405162461bcd60e51b815260206004820152601160248201527f57726f6e6720696e70757448616e646c6500000000000000000000000000000060448201526064016103a8565b5050506001016108a1565b50610a8787610f42565b50505050610baa565b5f865f81518110610aa357610aa36117f4565b016020015160f81c9050818111610aec5760405162461bcd60e51b815260206004820152600d60248201526c092dcecc2d8d2c840d2dcc8caf609b1b60448201526064016103a8565b5f805b6020811015610b5757610b0381601f611846565b610b0e90600861181c565b8982610b1b87602061181c565b610b26906002611833565b610b309190611833565b81518110610b4057610b406117f4565b016020015160f81c901b9190911790600101610aef565b50838114610ba75760405162461bcd60e51b815260206004820152601160248201527f57726f6e6720696e70757448616e646c6500000000000000000000000000000060448201526064016103a8565b50505b50925050505b9392505050565b610bbf610f49565b610bc882611000565b610bd28282611008565b5050565b5f610bdf6110dc565b507f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc90565b610c0c611125565b610c155f611157565b565b3380610c21610db5565b6001600160a01b031614610c535760405163118cdaa760e01b81526001600160a01b03821660048201526024016103a8565b610c5c81611157565b50565b5f807f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c1993005b546001600160a01b031692915050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff165f81158015610cdd5750825b90505f8267ffffffffffffffff166001148015610cf95750303b155b905081158015610d07575080155b15610d255760405163f92ee8a960e01b815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610d5957845468ff00000000000000001916680100000000000000001785555b610d628661118f565b8315610dad57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050565b5f807f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c00610c83565b610de5611125565b7f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0080546001600160a01b0319166001600160a01b0383169081178255610e29610c5f565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a35050565b60605f610e6e836111a0565b60010190505f8167ffffffffffffffff811115610e8d57610e8d6115b1565b6040519080825280601f01601f191660200182016040528015610eb7576020820181803683370190505b5090508181016020015b5f19017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8504945084610ec157509392505050565b5f805f808585888a604051602001610f1a9493929190611910565b60408051808303601f190181529190528051602090910120805c999098509650505050505050565b6001815d50565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161480610fe257507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610fd67f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b6001600160a01b031614155b15610c155760405163703e46dd60e11b815260040160405180910390fd5b610c5c611125565b816001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611062575060408051601f3d908101601f1916820190925261105f91810190611961565b60015b61108a57604051634c9c8ce360e01b81526001600160a01b03831660048201526024016103a8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc81146110cd57604051632a87526960e21b8152600481018290526024016103a8565b6110d78383611282565b505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c155760405163703e46dd60e11b815260040160405180910390fd5b3361112e610c5f565b6001600160a01b031614610c155760405163118cdaa760e01b81523360048201526024016103a8565b7f237e158222e3e6968b72b9db0d8043aacf074ad9f650f0d1606b4d82ee432c0080546001600160a01b0319168155610bd2826112d7565b611197611347565b610c5c81611395565b5f807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106111e8577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310611214576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061123257662386f26fc10000830492506010015b6305f5e100831061124a576305f5e100830492506008015b612710831061125e57612710830492506004015b60648310611270576064830492506002015b600a831061127c576001015b92915050565b61128b826113c6565b6040516001600160a01b038316907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b905f90a28051156112cf576110d7828261143c565b610bd26114ae565b7f9016d09d72d40fdae2fd8ceac6b6234c7706214fd39c1cd1e609a0528c19930080546001600160a01b031981166001600160a01b03848116918217845560405192169182907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a3505050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610c1557604051631afcd79f60e31b815260040160405180910390fd5b61139d611347565b6001600160a01b038116610c5357604051631e4fbdf760e01b81525f60048201526024016103a8565b806001600160a01b03163b5f036113fb57604051634c9c8ce360e01b81526001600160a01b03821660048201526024016103a8565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b60605f80846001600160a01b0316846040516114589190611978565b5f60405180830381855af49150503d805f8114611490576040519150601f19603f3d011682016040523d82523d5f602084013e611495565b606091505b50915091506114a58583836114cd565b95945050505050565b3415610c155760405163b398979f60e01b815260040160405180910390fd5b6060826114e2576114dd82611529565b610bb0565b81511580156114f957506001600160a01b0384163b155b1561152257604051639996b31560e01b81526001600160a01b03851660048201526024016103a8565b5080610bb0565b8051156115395780518082602001fd5b60405163d6bda27560e01b815260040160405180910390fd5b5f5b8381101561156c578181015183820152602001611554565b50505f910152565b5f815180845261158b816020860160208601611552565b601f01601f19169290920160200192915050565b602081525f610bb06020830184611574565b634e487b7160e01b5f52604160045260245ffd5b80356001600160a01b03811681146115db575f80fd5b919050565b5f82601f8301126115ef575f80fd5b813567ffffffffffffffff8082111561160a5761160a6115b1565b604051601f8301601f19908116603f01168101908282118183101715611632576116326115b1565b8160405283815286602085880101111561164a575f80fd5b836020870160208301375f602085830101528094505050505092915050565b5f805f83850360a081121561167c575f80fd5b6060811215611689575f80fd5b506040516060810167ffffffffffffffff82821081831117156116ae576116ae6115b1565b816040526116bb876115c5565b83526116c9602088016115c5565b60208401526116da604088016115c5565b604084015291945060608601359350608086013591808311156116fb575f80fd5b5050611709868287016115e0565b9150509250925092565b5f8060408385031215611724575f80fd5b61172d836115c5565b9150602083013567ffffffffffffffff811115611748575f80fd5b611754858286016115e0565b9150509250929050565b5f6020828403121561176e575f80fd5b610bb0826115c5565b5f8551611788818460208a01611552565b61103b60f11b90830190815285516117a7816002840160208a01611552565b808201915050601760f91b80600283015285516117cb816003850160208a01611552565b600392019182015283516117e6816004840160208801611552565b016004019695505050505050565b634e487b7160e01b5f52603260045260245ffd5b634e487b7160e01b5f52601160045260245ffd5b808202811582820484141761127c5761127c611808565b8082018082111561127c5761127c611808565b8181038181111561127c5761127c611808565b5f60a082016001600160a01b03808651168452602080870151602086015281604088015116604086015281606088015116606086015260a06080860152829150855180845260c08601925060c08160051b8701019350602087015f5b828110156118e35760bf198887030185526118d1868351611574565b955093830193908301906001016118b5565b509398975050505050505050565b5f60208284031215611901575f80fd5b81518015158114610bb0575f80fd5b5f6bffffffffffffffffffffffff19808760601b168352808660601b166014840152808560601b16602884015250825161195181603c850160208701611552565b91909101603c0195945050505050565b5f60208284031215611971575f80fd5b5051919050565b5f8251611989818460208701611552565b919091019291505056fea164736f6c6343000818000a";

type InputVerifierConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InputVerifierConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InputVerifier__factory extends ContractFactory {
  constructor(...args: InputVerifierConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      InputVerifier & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): InputVerifier__factory {
    return super.connect(runner) as InputVerifier__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InputVerifierInterface {
    return new Interface(_abi) as InputVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): InputVerifier {
    return new Contract(address, _abi, runner) as unknown as InputVerifier;
  }
}
