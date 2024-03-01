/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  TokenMapperRegistering,
  TokenMapperRegisteringInterface,
} from "../../contracts/TokenMapperRegistering";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "registerId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenType",
            type: "string",
          },
        ],
        indexed: false,
        internalType: "struct TokenMapperRegistering.TokenInfo[]",
        name: "tokenInfo",
        type: "tuple[]",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "LogRegister",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "registerId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "destToken",
        type: "address",
      },
    ],
    name: "LogUpdateMapping",
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
    name: "OPERATION_ROLE",
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
        internalType: "uint256",
        name: "registerId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "srcToken",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "initialize",
        type: "bytes",
      },
    ],
    name: "addMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "destTokens",
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
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
    ],
    name: "getDestToken",
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
        components: [
          {
            internalType: "uint256",
            name: "chainId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "decimals",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "symbol",
            type: "string",
          },
          {
            internalType: "string",
            name: "tokenType",
            type: "string",
          },
        ],
        internalType: "struct TokenMapperRegistering.TokenInfo[]",
        name: "tokenInfos",
        type: "tuple[]",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    name: "registerMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "registeredIds",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "registerId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "destToken",
        type: "address",
      },
    ],
    name: "updateMapping",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052346200002657620000146200004a565b604051611814620002ab823961181490f35b600080fd5b6200003b6200003b6200003b9290565b90565b6200003b60006200002b565b6200008d7f20296b01d0b6bd176f0c1e29644934c0047abf080dae43609a1bbc09e39bafdb620000856200007d6200003e565b8092620000df565b3390620001f9565b565b906200009b906200003b565b600052602052604060002090565b90600019905b9181191691161790565b90620000d3620000cd620000db926200003b565b6200003b565b8254620000a9565b9055565b90620000eb8262000166565b62000106826001620000ff8660006200008f565b01620000b9565b620001416200013a6200013a7fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff956200003b565b926200003b565b926200014c60405190565b600090a4565b6200003b9081565b6200003b905462000152565b6001620001836200003b926200017a600090565b5060006200008f565b016200015a565b6200003b90620001a0906001600160a01b031682565b6001600160a01b031690565b6200003b906200018a565b6200003b90620001ac565b906200009b90620001b7565b9060ff90620000af565b151590565b90620001f16200003b620000db92620001d8565b8254620001ce565b906200020e6200020a82846200028c565b1590565b62000217575050565b6200023d6001620002378360006200023087826200008f565b01620001c2565b620001dd565b33906200014162000273620002737f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d956200003b565b92620001b7565b60ff1690565b6200003b90546200027a565b6200003b91620002a49162000230600091826200008f565b6200028056fe6080604052600436101561001257600080fd5b60003560e01c806301ffc9a7146100f2578063248a9ca3146100ed5780632c7d0e81146100e85780632f2ff15d146100e357806336568abe146100de5780633e541fd1146100d95780638545d8df146100d457806391d14854146100cf57806392883351146100ca578063a217fddf146100c5578063b920dbae146100c0578063c8740ab8146100bb578063cc4aedcb146100b65763d547741f03610122576105b3565b610597565b610507565b6104cb565b6104b0565b61045c565b6103d8565b61039f565b610378565b6102e5565b6102cc565b610288565b6101a5565b61014d565b7fffffffff0000000000000000000000000000000000000000000000000000000081165b0361012257565b600080fd5b90503590610134826100f7565b565b906020828203126101225761014a91610127565b90565b346101225761017a610168610163366004610136565b6105cc565b60405191829182901515815260200190565b0390f35b8061011b565b905035906101348261017e565b906020828203126101225761014a91610184565b346101225761017a6101c06101bb366004610191565b6106b3565b6040519182918290815260200190565b73ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff811661011b565b90503590610134826101e9565b909182601f830112156101225781359167ffffffffffffffff831161012257602001926001830284011161012257565b91606083830312610122576102578284610184565b926102658360208301610205565b92604082013567ffffffffffffffff8111610122576102849201610212565b9091565b34610122576102a461029b366004610242565b929190916116b0565b604051005b91906040838203126101225761014a906102c38185610184565b93602001610205565b34610122576102a46102df3660046102a9565b906106f2565b34610122576102a46102f83660046102a9565b906109ed565b909182601f830112156101225781359167ffffffffffffffff831161012257602001926020830284011161012257565b909160408284031261012257813567ffffffffffffffff811161012257836103579184016102fe565b929093602082013567ffffffffffffffff8111610122576102849201610212565b34610122576102a461038b36600461032e565b9291909161132e565b600091031261012257565b34610122576103af366004610394565b61017a7f20296b01d0b6bd176f0c1e29644934c0047abf080dae43609a1bbc09e39bafdb6101c0565b346101225761017a6101686103ee3660046102a9565b90610683565b61014a61014a61014a9290565b9061040b906103f4565b600052602052604060002090565b61014a916008021c73ffffffffffffffffffffffffffffffffffffffff1690565b9061014a9154610419565b61014a90610457600291600092610401565b61043a565b346101225761017a610477610472366004610191565b610445565b6040519182918273ffffffffffffffffffffffffffffffffffffffff909116815260200190565b61014a60006103f4565b61014a61049e565b34610122576104c0366004610394565b61017a6101c06104a8565b34610122576102a46104de3660046102a9565b9061173a565b91906040838203126101225761014a906104fe8185610205565b93602001610184565b346101225761017a61047761051d3660046104e4565b90610eea565b6101d061014a61014a9273ffffffffffffffffffffffffffffffffffffffff1690565b61014a90610523565b61014a90610546565b9061040b9061054f565b61014a916008021c81565b9061014a9154610562565b61059261014a9261058d600393600094610558565b610401565b61056d565b346101225761017a6101c06105ad3660046104e4565b90610578565b34610122576102a46105c63660046102a9565b90610957565b7f7965db0b000000000000000000000000000000000000000000000000000000007fffffffff0000000000000000000000000000000000000000000000000000000082161490811561061c575090565b61014a91507fffffffff00000000000000000000000000000000000000000000000000000000167f01ffc9a7000000000000000000000000000000000000000000000000000000001490565b9061040b565b61014a905b60ff1690565b61014a905461066e565b61014a9161069d9161069760009182610668565b01610558565b610679565b61014a9081565b61014a90546106a2565b60016106cc61014a926106c4600090565b506000610668565b016106a9565b90610134916106e86106e3826106b3565b6106fc565b9061013491610a4a565b90610134916106d2565b610134903390610896565b61014a906103f4565b0190565b60005b8381106107275750506000910152565b8181015183820152602001610717565b61071061074f92602092610749815190565b94859290565b93849101610714565b61079661014a9392610790610790937f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260170190565b90610737565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000815260110190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b90601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810190811067ffffffffffffffff82111761082e57604052565b6107bf565b61085461085d60209361071093610848815190565b80835293849260200190565b95869101610714565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01690565b602080825261014a92910190610833565b906108a86108a48284610683565b1590565b6108b0575050565b6109389161014a6108cc6108c661090694610eaa565b92610707565b6108e16020916108db836103f4565b90610d21565b926108fa6108ee60405190565b94859384019283610758565b908103825203826107ee565b6040519182917f08c379a000000000000000000000000000000000000000000000000000000000835260048301610885565b0390fd5b906101349161094d6106e3826106b3565b9061013491610ac0565b906101349161093c565b1561096857565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608490fd5b6101349190610a1b6109fe336101d0565b73ffffffffffffffffffffffffffffffffffffffff841614610961565b610ac0565b9060ff905b9181191691161790565b90610a3f61014a610a4692151590565b8254610a20565b9055565b90610a586108a48284610683565b610a60575050565b610a7a6001610a758360006106978782610668565b610a2f565b3390610ab0610aaa610aaa7f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d9590565b9261054f565b92610aba60405190565b600090a4565b90610acb8183610683565b610ad3575050565b610ae76000610a7583826106978782610668565b3390610ab0610aaa610aaa7ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9590565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810292918115918404141715610b5957565b610b17565b91908201809211610b5957565b90610134610b7860405190565b92836107ee565b67ffffffffffffffff811161082e57602090601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160190565b90610bcc610bc783610b7f565b610b6b565b918252565b369037565b90610134610bec610be684610bba565b93610b7f565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe00160208401610bd1565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90610c4f825190565b811015610c5d570160200190565b610c17565b8015610b59577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0190565b61067361014a61014a9290565b61014a90610cb2610cae61014a9460ff1690565b9190565b901c90565b15610cbe57565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815280610938600482016020808252818101527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604082015260600190565b9190600292610d52610d4d610d3e84610d39886103f4565b610b46565b610d47876103f4565b90610b5e565b610bd6565b916000906030610d6a610d64846103f4565b86610c46565b53610dbe610db57f780000000000000000000000000000000000000000000000000000000000000092610d396001998a95871a610daf610da9886103f4565b8b610c46565b536103f4565b610d47836103f4565b905b610de2575b5061014a93945090610ddc610cae61014a936103f4565b14610cb7565b91610dec866103f4565b831115610e67577f3031323334353637383961626364656600000000000000000000000000000000610e1e600f6103f4565b8216906010821015610c5d578792610e3e610e5b92610e61941a60f81b90565b851a610e4a8789610c46565b53610e556004610c8d565b90610c9a565b93610c62565b90610dc0565b91610dc5565b61014a61014a61014a9273ffffffffffffffffffffffffffffffffffffffff1690565b61014a6014610c8d565b61014a61014a61014a9260ff1690565b610ec7610ec261014a92610ebc606090565b50610546565b610e6d565b6108db610ed2610e90565b610e9a565b61014a906101d0565b61014a9054610ed7565b610f10610f0b61014a9361058d610f1794610f03600090565b506003610558565b6106a9565b6002610401565b610ee0565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610b595760010190565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff413682900301821215610122570190565b90821015610c5d57602061014a9202810190610f49565b60ff811661011b565b9050359061013482610f94565b90826000939282370152565b90929192610fc6610bc782610b7f565b938185526020850190828401116101225761013492610faa565b9080601f830112156101225781602061014a93359101610fb6565b91909160c0818403126101225761101260c0610b6b565b92600061101f8284610184565b90850152602061103182828501610205565b90850152604061104382828501610f9d565b90850152606082013567ffffffffffffffff81116101225781611067918401610fe0565b6060850152608082013567ffffffffffffffff8111610122578161108c918401610fe0565b608085015260a082013567ffffffffffffffff8111610122576110af9201610fe0565b60a0830152565b61014a903690610ffb565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90610a25565b906110f961014a610a46926103f4565b82546110c1565b5061014a906020810190610184565b5061014a906020810190610205565b5061014a906020810190610f9d565b90357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1368390030181121561012257016020813591019167ffffffffffffffff82116101225736829003831361012257565b919061085d81611196816107109560209181520190565b8095610faa565b61014a9161124761123c61122160c084016111bf6111bb8780611100565b8652565b6111ec6111cf602088018861110f565b73ffffffffffffffffffffffffffffffffffffffff166020870152565b6112066111fc604088018861111e565b60ff166040870152565b611213606087018761112d565b90868303606088015261117f565b61122e608086018661112d565b90858303608087015261117f565b9260a081019061112d565b9160a081850391015261117f565b9061014a9161119d565b90357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff413683900301811215610122570190565b8183529160200190816112a86020830284019490565b92836000925b8484106112be5750505050505090565b90919293949560206112ea6112e383856001950388526112de8b8861125f565b611255565b9860200190565b9401940192949391906112ae565b93919061014a95936113209261131360608801936000890152565b8683036020880152611292565b92604081850391015261117f565b91909260019161134c61133e8490565b61134781611435565b611420565b926000868261135a836103f4565b905b6113a3575b505050509061139e917faf81528094806d07d60899b323b5bfe656ddd80d0139d629b158a40c2e8898ce9561139560405190565b958695866112f8565b0390a1565b8689898484101561141857916114086113cc6113c78661140d956114129897610f7d565b6110b6565b611402886113fc60036113f6602086015173ffffffffffffffffffffffffffffffffffffffff1690565b90610558565b92015190565b90610401565b6110e9565b610f1c565b8361135c565b505050611361565b600061014a9161142e600090565b50016106a9565b61013490611454600061144860016103f4565b920191610710836106a9565b906110e9565b1561146157565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601360248201527f696e76616c6964207265676973746572206964000000000000000000000000006044820152606490fd5b906101349392916114d160006103f4565b8111806114e7575b6114e29061145a565b611502565b506114e26114f861014a6001611420565b82111590506114d9565b610134939291906115327f20296b01d0b6bd176f0c1e29644934c0047abf080dae43609a1bbc09e39bafdb6106fc565b611609565b90916107109083908093610faa565b909161014a92611537565b3d1561156b576115603d610bba565b903d6000602084013e565b606090565b1561157757565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601160248201527f63616e6e6f7420696e697469616c697a650000000000000000000000000000006044820152606490fd5b9073ffffffffffffffffffffffffffffffffffffffff90610a25565b9061160261014a610a469261054f565b82546115d6565b926000809161161a6116449461179b565b9461163061162760405190565b92839283611546565b039082865af161163e611551565b50611570565b61165881611653846002610401565b6115f2565b7fa925b39f2452e2fe5973ab3f6a147e903cde236f26377dccdec8b3f739e9204f9161139e61168660405190565b9283928390815273ffffffffffffffffffffffffffffffffffffffff909116602082015260400190565b906101349392916114c0565b90610134916116cb60006103f4565b8111806116e1575b6116dc9061145a565b6116fc565b506116dc6116f261014a6001611420565b82111590506116d3565b610134919061172a7f20296b01d0b6bd176f0c1e29644934c0047abf080dae43609a1bbc09e39bafdb6106fc565b9061165881611653846002610401565b90610134916116bc565b61176d61176761014a9273ffffffffffffffffffffffffffffffffffffffff1690565b60601b90565b7fffffffffffffffffffffffffffffffffffffffff0000000000000000000000001690565b61014a90611744565b6117af6037916117a9600090565b50611792565b604051907f3d602d80600a3d3981f3363d3d373d3d3d363d73000000000000000000000000825260148201527f5af43d82803e903d91602b57fd5bf3000000000000000000000000000000000060288201526000f09056fea164736f6c6343000814000a";

type TokenMapperRegisteringConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenMapperRegisteringConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenMapperRegistering__factory extends ContractFactory {
  constructor(...args: TokenMapperRegisteringConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<TokenMapperRegistering> {
    return super.deploy(overrides || {}) as Promise<TokenMapperRegistering>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenMapperRegistering {
    return super.attach(address) as TokenMapperRegistering;
  }
  override connect(signer: Signer): TokenMapperRegistering__factory {
    return super.connect(signer) as TokenMapperRegistering__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenMapperRegisteringInterface {
    return new utils.Interface(_abi) as TokenMapperRegisteringInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenMapperRegistering {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenMapperRegistering;
  }
}