/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC20Upgradeable,
  ERC20UpgradeableInterface,
} from "../../../../../@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
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
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "balanceOf",
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
    inputs: [],
    name: "decimals",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
    name: "symbol",
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
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523461001a57604051610cb36100208239610cb390f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806306fdde03146100c2578063095ea7b3146100bd57806318160ddd146100b857806323b872dd146100b3578063313ce567146100ae57806339509351146100a957806370a08231146100a457806395d89b411461009f578063a457c2d71461009a578063a9059cbb146100955763dd62ed3e036100d2576103a2565b610363565b610347565b61032c565b610311565b6102e1565b6102b2565b610296565b61023a565b61020c565b610164565b60009103126100d257565b600080fd5b60005b8381106100ea5750506000910152565b81810151838201526020016100da565b61011b61012460209361014c9361010f815190565b80835293849260200190565b958691016100d7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690565b0190565b6020808252610161929101906100fa565b90565b346100d2576101743660046100c7565b61018b61017f610543565b60405191829182610150565b0390f35b73ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff81165b036100d257565b905035906101d4826101a8565b565b806101c0565b905035906101d4826101d6565b91906040838203126100d2576101619061020381856101c7565b936020016101dc565b346100d25761018b6102286102223660046101e9565b9061062d565b60405191829182901515815260200190565b346100d25761024a3660046100c7565b61018b610255610585565b6040515b9182918290815260200190565b90916060828403126100d25761016161027f84846101c7565b9361028d81602086016101c7565b936040016101dc565b346100d25761018b6102286102ac366004610266565b91610638565b346100d2576102c23660046100c7565b61018b6102cd61056a565b6040519182918260ff909116815260200190565b346100d25761018b6102286102f73660046101e9565b9061068a565b906020828203126100d257610161916101c7565b346100d25761018b6102556103273660046102fd565b6105dc565b346100d25761033c3660046100c7565b61018b61017f61054d565b346100d25761018b61022861035d3660046101e9565b90610735565b346100d25761018b6102286103793660046101e9565b906105f8565b91906040838203126100d2576101619061039981856101c7565b936020016101c7565b346100d25761018b6102556103b836600461037f565b9061060d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b906001600283049216801561040d575b602083101461040857565b6103be565b91607f16916103fd565b8054600093929161043461042a836103ed565b8085529360200190565b9160018116908115610486575060011461044d57505050565b6104609192939450600052602060002090565b916000925b8184106104725750500190565b805484840152602090930192600101610465565b92949550505060ff1916825215156020020190565b9061016191610417565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810190811067ffffffffffffffff82111761051457604052565b6104a5565b906101d46105339261052a60405190565b9384809261049b565b03836104d4565b61016190610519565b610161603661053a565b610161603761053a565b6105646101616101619290565b60ff1690565b6101616012610557565b6101619081565b6101619054610574565b610161603561057b565b61018f6101616101619273ffffffffffffffffffffffffffffffffffffffff1690565b6101619061058f565b610161906105b2565b906105ce906105bb565b600052602052604060002090565b6105f3610161916105eb600090565b5060336105c4565b61057b565b610608919033610934565b610934565b600190565b610161916106286105f392610620600090565b5060346105c4565b6105c4565b610608919033610b41565b610608929190610603833383610c50565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b9190820180921161068557565b610649565b61060891906106a3339261069e838561060d565b610678565b91610b41565b156106b057565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f0000000000000000000000000000000000000000000000000000006064820152608490fd5b61060891906106a33392610749838561060d565b610755828210156106a9565b0390565b61018f6101616101619290565b61016190610759565b1561077657565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608490fd5b1561080257565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608490fd5b1561088e57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608490fd5b6101616101616101619290565b9061016161016161093092610913565b9055565b61099a61097c6109446000610766565b61018f73ffffffffffffffffffffffffffffffffffffffff821673ffffffffffffffffffffffffffffffffffffffff8616141561076f565b73ffffffffffffffffffffffffffffffffffffffff841614156107fb565b6109e56109d28360336106286109c3886109b76105f389866105c4565b61075582821015610887565b6109cd87846105c4565b610920565b6109df8561014c8361057b565b90610920565b610a25610a1b610a157fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef936105bb565b936105bb565b9361025960405190565b0390a3565b15610a3157565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608490fd5b15610abc57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608490fd5b610ba7610b89610b516000610766565b61018f73ffffffffffffffffffffffffffffffffffffffff821673ffffffffffffffffffffffffffffffffffffffff86161415610a2a565b73ffffffffffffffffffffffffffffffffffffffff84161415610ab5565b610bba836109cd846106288560346105c4565b610a25610a1b610a157f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925936105bb565b15610bf157565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606490fd5b90610c5b818361060d565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8103610c89575b50505050565b610c9d936106a39161075582821015610bea565b38808080610c8356fea164736f6c6343000814000a";

type ERC20UpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC20UpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC20Upgradeable__factory extends ContractFactory {
  constructor(...args: ERC20UpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC20Upgradeable> {
    return super.deploy(overrides || {}) as Promise<ERC20Upgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ERC20Upgradeable {
    return super.attach(address) as ERC20Upgradeable;
  }
  override connect(signer: Signer): ERC20Upgradeable__factory {
    return super.connect(signer) as ERC20Upgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC20UpgradeableInterface {
    return new utils.Interface(_abi) as ERC20UpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Upgradeable {
    return new Contract(address, _abi, signerOrProvider) as ERC20Upgradeable;
  }
}