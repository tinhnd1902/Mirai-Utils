/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IABIResolver,
  IABIResolverInterface,
} from "../../../../../../@ensdomains/ens-contracts/contracts/resolvers/profiles/IABIResolver";

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
        internalType: "uint256",
        name: "contentType",
        type: "uint256",
      },
    ],
    name: "ABIChanged",
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
        internalType: "uint256",
        name: "contentTypes",
        type: "uint256",
      },
    ],
    name: "ABI",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IABIResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IABIResolverInterface {
    return new utils.Interface(_abi) as IABIResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IABIResolver {
    return new Contract(address, _abi, signerOrProvider) as IABIResolver;
  }
}
