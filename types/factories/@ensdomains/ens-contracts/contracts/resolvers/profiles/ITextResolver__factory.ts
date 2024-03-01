/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITextResolver,
  ITextResolverInterface,
} from "../../../../../../@ensdomains/ens-contracts/contracts/resolvers/profiles/ITextResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "string",
        name: "indexedKey",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "key",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "value",
        type: "string",
      },
    ],
    name: "TextChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "key",
        type: "string",
      },
    ],
    name: "text",
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
];

export class ITextResolver__factory {
  static readonly abi = _abi;
  static createInterface(): ITextResolverInterface {
    return new utils.Interface(_abi) as ITextResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITextResolver {
    return new Contract(address, _abi, signerOrProvider) as ITextResolver;
  }
}
