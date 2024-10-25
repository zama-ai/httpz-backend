/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IInputVerifier,
  IInputVerifierInterface,
} from "../../../contracts/TFHEExecutor.events.sol/IInputVerifier";

const _abi = [
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

export class IInputVerifier__factory {
  static readonly abi = _abi;
  static createInterface(): IInputVerifierInterface {
    return new Interface(_abi) as IInputVerifierInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IInputVerifier {
    return new Contract(address, _abi, runner) as unknown as IInputVerifier;
  }
}
