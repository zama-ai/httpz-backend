/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IFHEPayment,
  IFHEPaymentInterface,
} from "../../../payment/Payment.sol/IFHEPayment";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getAvailableDepositsETH",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "withdrawETH",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFHEPayment__factory {
  static readonly abi = _abi;
  static createInterface(): IFHEPaymentInterface {
    return new Interface(_abi) as IFHEPaymentInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IFHEPayment {
    return new Contract(address, _abi, runner) as unknown as IFHEPayment;
  }
}
