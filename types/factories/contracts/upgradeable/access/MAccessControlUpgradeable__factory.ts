/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  MAccessControlUpgradeable,
  MAccessControlUpgradeableInterface,
} from "../../../../contracts/upgradeable/access/MAccessControlUpgradeable";

const _abi = [
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
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
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
    name: "OWNER_ROLE",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523461001a57604051610c3b6100208239610c3b90f35b600080fdfe6080604052600436101561001257600080fd5b60003560e01c806301ffc9a714610092578063248a9ca31461008d5780632f2ff15d1461008857806336568abe1461008357806391d148541461007e578063a217fddf14610079578063d547741f146100745763e58378bb036100c257610286565b61026d565b610252565b61020c565b6101f3565b6101d5565b610145565b6100ed565b7fffffffff0000000000000000000000000000000000000000000000000000000081165b036100c257565b600080fd5b905035906100d482610097565b565b906020828203126100c2576100ea916100c7565b90565b346100c25761011a6101086101033660046100d6565b6102bf565b60405191829182901515815260200190565b0390f35b806100bb565b905035906100d48261011e565b906020828203126100c2576100ea91610124565b346100c25761011a61016061015b366004610131565b6103f8565b6040519182918290815260200190565b73ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff81166100bb565b905035906100d482610189565b91906040838203126100c2576100ea906101cc8185610124565b936020016101a5565b346100c2576101ee6101e83660046101b2565b9061042f565b604051005b346100c2576101ee6102063660046101b2565b9061072a565b346100c25761011a6101086102223660046101b2565b906103bf565b60009103126100c257565b6100ea6100ea6100ea9290565b6100ea6000610233565b6100ea610240565b346100c257610262366004610228565b61011a61016061024a565b346100c2576101ee6102803660046101b2565b90610694565b346100c257610296366004610228565b61011a7fb19546dff01e856fb3f010c267a7b1c60363cf8a4664e21cc89c26224620214e610160565b7f7965db0b000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000082161490811561030f575090565b6100ea91507fffffffff00000000000000000000000000000000000000000000000000000000167f01ffc9a7000000000000000000000000000000000000000000000000000000001490565b905b600052602052604060002090565b6101706100ea6100ea9273ffffffffffffffffffffffffffffffffffffffff1690565b6100ea9061036b565b6100ea9061038e565b9061035d90610397565b6100ea905b60ff1690565b6100ea90546103aa565b6100ea9160006103dc6103e2936103d4600090565b50606561035b565b016103a0565b6103b5565b6100ea9081565b6100ea90546103e7565b60016104096100ea926103d4600090565b016103ee565b906100d491610425610420826103f8565b610439565b906100d49161079f565b906100d49161040f565b6100d49033906105d3565b6100ea90610233565b0190565b60005b8381106104645750506000910152565b8181015183820152602001610454565b61044d61048c92602092610486815190565b94859290565b93849101610451565b6104d36100ea93926104cd6104cd937f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260170190565b90610474565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000815260110190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810190811067ffffffffffffffff82111761056b57604052565b6104fc565b61059161059a60209361044d93610585815190565b80835293849260200190565b95869101610451565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690565b60208082526100ea92910190610570565b906105e56105e182846103bf565b1590565b6105ed575050565b610675916100ea61060961060361064394610c01565b92610444565b61061e60209161061883610233565b90610a78565b9261063761062b60405190565b94859384019283610495565b9081038252038261052b565b6040519182917f08c379a0000000000000000000000000000000000000000000000000000000008352600483016105c2565b0390fd5b906100d49161068a610420826103f8565b906100d491610816565b906100d491610679565b156106a557565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608490fd5b6100d4919061075861073b33610170565b73ffffffffffffffffffffffffffffffffffffffff84161461069e565b610816565b9061076d6100ea61079b92151590565b82547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660ff919091161790565b9055565b906107ad6105e182846103bf565b6107b5575050565b6107d060016107cb8360006103dc87606561035b565b61075d565b33906108066108006108007f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9590565b92610397565b9261081060405190565b600090a4565b9061082181836103bf565b610829575050565b61083e60006107cb83826103dc87606561035b565b33906108066108006108007ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818102929181159184041417156108b057565b61086e565b919082018092116108b057565b906100d46108cf60405190565b928361052b565b67ffffffffffffffff811161056b57602090601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160190565b9061092361091e836108d6565b6108c2565b918252565b369037565b906100d461094361093d84610911565b936108d6565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00160208401610928565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b906109a6825190565b8110156109b4570160200190565b61096e565b80156108b0577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b6103af6100ea6100ea9290565b6100ea90610a09610a056100ea9460ff1690565b9190565b901c90565b15610a1557565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815280610675600482016020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b9190600292610aa9610aa4610a9584610a9088610233565b61089d565b610a9e87610233565b906108b5565b61092d565b916000906030610ac1610abb84610233565b8661099d565b53610b15610b0c7f780000000000000000000000000000000000000000000000000000000000000092610a906001998a95871a610b06610b0088610233565b8b61099d565b53610233565b610a9e83610233565b905b610b39575b506100ea93945090610b33610a056100ea93610233565b14610a0e565b91610b4386610233565b831115610bbe577f3031323334353637383961626364656600000000000000000000000000000000610b75600f610233565b82169060108210156109b4578792610b95610bb292610bb8941a60f81b90565b851a610ba1878961099d565b53610bac60046109e4565b906109f1565b936109b9565b90610b17565b91610b1c565b6100ea6100ea6100ea9273ffffffffffffffffffffffffffffffffffffffff1690565b6100ea60146109e4565b6100ea6100ea6100ea9260ff1690565b610c1e610c196100ea92610c13606090565b5061038e565b610bc4565b610618610c29610be7565b610bf156fea164736f6c6343000814000a";

type MAccessControlUpgradeableConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MAccessControlUpgradeableConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MAccessControlUpgradeable__factory extends ContractFactory {
  constructor(...args: MAccessControlUpgradeableConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MAccessControlUpgradeable> {
    return super.deploy(overrides || {}) as Promise<MAccessControlUpgradeable>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MAccessControlUpgradeable {
    return super.attach(address) as MAccessControlUpgradeable;
  }
  override connect(signer: Signer): MAccessControlUpgradeable__factory {
    return super.connect(signer) as MAccessControlUpgradeable__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MAccessControlUpgradeableInterface {
    return new utils.Interface(_abi) as MAccessControlUpgradeableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MAccessControlUpgradeable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MAccessControlUpgradeable;
  }
}
