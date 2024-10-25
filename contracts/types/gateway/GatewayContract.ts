/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface GatewayContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "UPGRADE_INTERFACE_VERSION"
      | "acceptOwnership"
      | "addRelayer"
      | "fulfillRequest"
      | "getCounter"
      | "getKmsVerifierAddress"
      | "getMAX_DELAY"
      | "getVersion"
      | "initialize"
      | "isExpiredOrFulfilled"
      | "isRelayer"
      | "owner"
      | "pendingOwner"
      | "proxiableUUID"
      | "removeOffset"
      | "removeRelayer"
      | "renounceOwnership"
      | "requestDecryption"
      | "transferOwnership"
      | "upgradeToAndCall"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "AddedRelayer"
      | "EventDecryption"
      | "Initialized"
      | "OwnershipTransferStarted"
      | "OwnershipTransferred"
      | "RemovedRelayer"
      | "ResultCallback"
      | "Upgraded"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addRelayer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "fulfillRequest",
    values: [BigNumberish, BytesLike, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "getCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getKmsVerifierAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getMAX_DELAY",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isExpiredOrFulfilled",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isRelayer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeOffset",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "removeRelayer",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestDecryption",
    values: [BigNumberish[], BytesLike, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [AddressLike, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "UPGRADE_INTERFACE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addRelayer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "fulfillRequest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getCounter", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getKmsVerifierAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMAX_DELAY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVersion", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isExpiredOrFulfilled",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isRelayer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeOffset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeRelayer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestDecryption",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;
}

export namespace AddedRelayerEvent {
  export type InputTuple = [relayer: AddressLike];
  export type OutputTuple = [relayer: string];
  export interface OutputObject {
    relayer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace EventDecryptionEvent {
  export type InputTuple = [
    requestID: BigNumberish,
    cts: BigNumberish[],
    contractCaller: AddressLike,
    callbackSelector: BytesLike,
    msgValue: BigNumberish,
    maxTimestamp: BigNumberish,
    passSignaturesToCaller: boolean
  ];
  export type OutputTuple = [
    requestID: bigint,
    cts: bigint[],
    contractCaller: string,
    callbackSelector: string,
    msgValue: bigint,
    maxTimestamp: bigint,
    passSignaturesToCaller: boolean
  ];
  export interface OutputObject {
    requestID: bigint;
    cts: bigint[];
    contractCaller: string;
    callbackSelector: string;
    msgValue: bigint;
    maxTimestamp: bigint;
    passSignaturesToCaller: boolean;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace InitializedEvent {
  export type InputTuple = [version: BigNumberish];
  export type OutputTuple = [version: bigint];
  export interface OutputObject {
    version: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferStartedEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace OwnershipTransferredEvent {
  export type InputTuple = [previousOwner: AddressLike, newOwner: AddressLike];
  export type OutputTuple = [previousOwner: string, newOwner: string];
  export interface OutputObject {
    previousOwner: string;
    newOwner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RemovedRelayerEvent {
  export type InputTuple = [relayer: AddressLike];
  export type OutputTuple = [relayer: string];
  export interface OutputObject {
    relayer: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ResultCallbackEvent {
  export type InputTuple = [
    requestID: BigNumberish,
    success: boolean,
    result: BytesLike
  ];
  export type OutputTuple = [
    requestID: bigint,
    success: boolean,
    result: string
  ];
  export interface OutputObject {
    requestID: bigint;
    success: boolean;
    result: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpgradedEvent {
  export type InputTuple = [implementation: AddressLike];
  export type OutputTuple = [implementation: string];
  export interface OutputObject {
    implementation: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface GatewayContract extends BaseContract {
  connect(runner?: ContractRunner | null): GatewayContract;
  waitForDeployment(): Promise<this>;

  interface: GatewayContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  UPGRADE_INTERFACE_VERSION: TypedContractMethod<[], [string], "view">;

  acceptOwnership: TypedContractMethod<[], [void], "nonpayable">;

  addRelayer: TypedContractMethod<
    [relayerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  fulfillRequest: TypedContractMethod<
    [requestID: BigNumberish, decryptedCts: BytesLike, signatures: BytesLike[]],
    [void],
    "payable"
  >;

  getCounter: TypedContractMethod<[], [bigint], "nonpayable">;

  getKmsVerifierAddress: TypedContractMethod<[], [string], "nonpayable">;

  getMAX_DELAY: TypedContractMethod<[], [bigint], "nonpayable">;

  getVersion: TypedContractMethod<[], [string], "view">;

  initialize: TypedContractMethod<
    [_gatewayOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  isExpiredOrFulfilled: TypedContractMethod<
    [requestID: BigNumberish],
    [boolean],
    "view"
  >;

  isRelayer: TypedContractMethod<
    [account: AddressLike],
    [boolean],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  pendingOwner: TypedContractMethod<[], [string], "view">;

  proxiableUUID: TypedContractMethod<[], [string], "view">;

  removeOffset: TypedContractMethod<[input: BytesLike], [string], "view">;

  removeRelayer: TypedContractMethod<
    [relayerAddress: AddressLike],
    [void],
    "nonpayable"
  >;

  renounceOwnership: TypedContractMethod<[], [void], "nonpayable">;

  requestDecryption: TypedContractMethod<
    [
      ctsHandles: BigNumberish[],
      callbackSelector: BytesLike,
      msgValue: BigNumberish,
      maxTimestamp: BigNumberish,
      passSignaturesToCaller: boolean
    ],
    [bigint],
    "nonpayable"
  >;

  transferOwnership: TypedContractMethod<
    [newOwner: AddressLike],
    [void],
    "nonpayable"
  >;

  upgradeToAndCall: TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "UPGRADE_INTERFACE_VERSION"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "acceptOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "addRelayer"
  ): TypedContractMethod<[relayerAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "fulfillRequest"
  ): TypedContractMethod<
    [requestID: BigNumberish, decryptedCts: BytesLike, signatures: BytesLike[]],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "getCounter"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "getKmsVerifierAddress"
  ): TypedContractMethod<[], [string], "nonpayable">;
  getFunction(
    nameOrSignature: "getMAX_DELAY"
  ): TypedContractMethod<[], [bigint], "nonpayable">;
  getFunction(
    nameOrSignature: "getVersion"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "initialize"
  ): TypedContractMethod<[_gatewayOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "isExpiredOrFulfilled"
  ): TypedContractMethod<[requestID: BigNumberish], [boolean], "view">;
  getFunction(
    nameOrSignature: "isRelayer"
  ): TypedContractMethod<[account: AddressLike], [boolean], "nonpayable">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "pendingOwner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "proxiableUUID"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "removeOffset"
  ): TypedContractMethod<[input: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "removeRelayer"
  ): TypedContractMethod<[relayerAddress: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "renounceOwnership"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "requestDecryption"
  ): TypedContractMethod<
    [
      ctsHandles: BigNumberish[],
      callbackSelector: BytesLike,
      msgValue: BigNumberish,
      maxTimestamp: BigNumberish,
      passSignaturesToCaller: boolean
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "transferOwnership"
  ): TypedContractMethod<[newOwner: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "upgradeToAndCall"
  ): TypedContractMethod<
    [newImplementation: AddressLike, data: BytesLike],
    [void],
    "payable"
  >;

  getEvent(
    key: "AddedRelayer"
  ): TypedContractEvent<
    AddedRelayerEvent.InputTuple,
    AddedRelayerEvent.OutputTuple,
    AddedRelayerEvent.OutputObject
  >;
  getEvent(
    key: "EventDecryption"
  ): TypedContractEvent<
    EventDecryptionEvent.InputTuple,
    EventDecryptionEvent.OutputTuple,
    EventDecryptionEvent.OutputObject
  >;
  getEvent(
    key: "Initialized"
  ): TypedContractEvent<
    InitializedEvent.InputTuple,
    InitializedEvent.OutputTuple,
    InitializedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferStarted"
  ): TypedContractEvent<
    OwnershipTransferStartedEvent.InputTuple,
    OwnershipTransferStartedEvent.OutputTuple,
    OwnershipTransferStartedEvent.OutputObject
  >;
  getEvent(
    key: "OwnershipTransferred"
  ): TypedContractEvent<
    OwnershipTransferredEvent.InputTuple,
    OwnershipTransferredEvent.OutputTuple,
    OwnershipTransferredEvent.OutputObject
  >;
  getEvent(
    key: "RemovedRelayer"
  ): TypedContractEvent<
    RemovedRelayerEvent.InputTuple,
    RemovedRelayerEvent.OutputTuple,
    RemovedRelayerEvent.OutputObject
  >;
  getEvent(
    key: "ResultCallback"
  ): TypedContractEvent<
    ResultCallbackEvent.InputTuple,
    ResultCallbackEvent.OutputTuple,
    ResultCallbackEvent.OutputObject
  >;
  getEvent(
    key: "Upgraded"
  ): TypedContractEvent<
    UpgradedEvent.InputTuple,
    UpgradedEvent.OutputTuple,
    UpgradedEvent.OutputObject
  >;

  filters: {
    "AddedRelayer(address)": TypedContractEvent<
      AddedRelayerEvent.InputTuple,
      AddedRelayerEvent.OutputTuple,
      AddedRelayerEvent.OutputObject
    >;
    AddedRelayer: TypedContractEvent<
      AddedRelayerEvent.InputTuple,
      AddedRelayerEvent.OutputTuple,
      AddedRelayerEvent.OutputObject
    >;

    "EventDecryption(uint256,uint256[],address,bytes4,uint256,uint256,bool)": TypedContractEvent<
      EventDecryptionEvent.InputTuple,
      EventDecryptionEvent.OutputTuple,
      EventDecryptionEvent.OutputObject
    >;
    EventDecryption: TypedContractEvent<
      EventDecryptionEvent.InputTuple,
      EventDecryptionEvent.OutputTuple,
      EventDecryptionEvent.OutputObject
    >;

    "Initialized(uint64)": TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;
    Initialized: TypedContractEvent<
      InitializedEvent.InputTuple,
      InitializedEvent.OutputTuple,
      InitializedEvent.OutputObject
    >;

    "OwnershipTransferStarted(address,address)": TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;
    OwnershipTransferStarted: TypedContractEvent<
      OwnershipTransferStartedEvent.InputTuple,
      OwnershipTransferStartedEvent.OutputTuple,
      OwnershipTransferStartedEvent.OutputObject
    >;

    "OwnershipTransferred(address,address)": TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;
    OwnershipTransferred: TypedContractEvent<
      OwnershipTransferredEvent.InputTuple,
      OwnershipTransferredEvent.OutputTuple,
      OwnershipTransferredEvent.OutputObject
    >;

    "RemovedRelayer(address)": TypedContractEvent<
      RemovedRelayerEvent.InputTuple,
      RemovedRelayerEvent.OutputTuple,
      RemovedRelayerEvent.OutputObject
    >;
    RemovedRelayer: TypedContractEvent<
      RemovedRelayerEvent.InputTuple,
      RemovedRelayerEvent.OutputTuple,
      RemovedRelayerEvent.OutputObject
    >;

    "ResultCallback(uint256,bool,bytes)": TypedContractEvent<
      ResultCallbackEvent.InputTuple,
      ResultCallbackEvent.OutputTuple,
      ResultCallbackEvent.OutputObject
    >;
    ResultCallback: TypedContractEvent<
      ResultCallbackEvent.InputTuple,
      ResultCallbackEvent.OutputTuple,
      ResultCallbackEvent.OutputObject
    >;

    "Upgraded(address)": TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
    Upgraded: TypedContractEvent<
      UpgradedEvent.InputTuple,
      UpgradedEvent.OutputTuple,
      UpgradedEvent.OutputObject
    >;
  };
}
