/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  SubContractCreateFail,
  SubContractCreateFailInterface,
} from "../../../examples/TracingSubCalls.sol/SubContractCreateFail";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b5060405161017438038061017483398101604081905261002e9161015c565b61003781610084565b5060405162461bcd60e51b815260206004820152601d60248201527f5468697320636f6e7374727563746f7220616c77617973206661696c73000000604482015260640160405180910390fd5b5f610090826005610096565b92915050565b5f807fed8d60e34876f751cc8b014c560745351147d9de11b9347c854e881b128ea6006001810154604051631ce2e8d760e31b8152600481018790527fff0000000000000000000000000000000000000000000000000000000000000060f887901b1660248201529192506001600160a01b03169063e71746b8906044016020604051808303815f875af1158015610130573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610154919061015c565b949350505050565b5f6020828403121561016c575f80fd5b505191905056fe";

type SubContractCreateFailConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SubContractCreateFailConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SubContractCreateFail__factory extends ContractFactory {
  constructor(...args: SubContractCreateFailConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    input: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(input, overrides || {});
  }
  override deploy(
    input: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(input, overrides || {}) as Promise<
      SubContractCreateFail & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): SubContractCreateFail__factory {
    return super.connect(runner) as SubContractCreateFail__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SubContractCreateFailInterface {
    return new Interface(_abi) as SubContractCreateFailInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): SubContractCreateFail {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as SubContractCreateFail;
  }
}
