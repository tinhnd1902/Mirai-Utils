/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace IMRC20 {
  export type BurnRequestStruct = {
    owner: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type BurnRequestStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    owner: string;
    value: BigNumber;
    fee: BigNumber;
    nonce: BigNumber;
    deadline: BigNumber;
  };

  export type PayRequestStruct = {
    owner: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    payId: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type PayRequestStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    owner: string;
    to: string;
    payId: string;
    value: BigNumber;
    fee: BigNumber;
    nonce: BigNumber;
    deadline: BigNumber;
  };

  export type PermitRequestStruct = {
    owner: PromiseOrValue<string>;
    spender: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type PermitRequestStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    owner: string;
    spender: string;
    value: BigNumber;
    fee: BigNumber;
    nonce: BigNumber;
    deadline: BigNumber;
  };

  export type TransferRequestStruct = {
    owner: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    value: PromiseOrValue<BigNumberish>;
    fee: PromiseOrValue<BigNumberish>;
    nonce: PromiseOrValue<BigNumberish>;
    deadline: PromiseOrValue<BigNumberish>;
  };

  export type TransferRequestStructOutput = [
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    owner: string;
    to: string;
    value: BigNumber;
    fee: BigNumber;
    nonce: BigNumber;
    deadline: BigNumber;
  };
}

export interface IMRC20Interface extends utils.Interface {
  functions: {
    "burnWithPermit((address,uint256,uint256,uint256,uint256),uint8,bytes32,bytes32)": FunctionFragment;
    "payWithPermit((address,address,string,uint256,uint256,uint256,uint256),uint8,bytes32,bytes32)": FunctionFragment;
    "permit((address,address,uint256,uint256,uint256,uint256),uint8,bytes32,bytes32)": FunctionFragment;
    "transferWithPermit((address,address,uint256,uint256,uint256,uint256),uint8,bytes32,bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "burnWithPermit"
      | "payWithPermit"
      | "permit"
      | "transferWithPermit"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "burnWithPermit",
    values: [
      IMRC20.BurnRequestStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "payWithPermit",
    values: [
      IMRC20.PayRequestStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [
      IMRC20.PermitRequestStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "transferWithPermit",
    values: [
      IMRC20.TransferRequestStruct,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "burnWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "payWithPermit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferWithPermit",
    data: BytesLike
  ): Result;

  events: {
    "Pay(address,address,string,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Pay"): EventFragment;
}

export interface PayEventObject {
  from: string;
  to: string;
  payId: string;
  amount: BigNumber;
  fee: BigNumber;
}
export type PayEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  PayEventObject
>;

export type PayEventFilter = TypedEventFilter<PayEvent>;

export interface IMRC20 extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMRC20Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    burnWithPermit(
      request: IMRC20.BurnRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    payWithPermit(
      request: IMRC20.PayRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    permit(
      request: IMRC20.PermitRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferWithPermit(
      request: IMRC20.TransferRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  burnWithPermit(
    request: IMRC20.BurnRequestStruct,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  payWithPermit(
    request: IMRC20.PayRequestStruct,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  permit(
    request: IMRC20.PermitRequestStruct,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferWithPermit(
    request: IMRC20.TransferRequestStruct,
    v: PromiseOrValue<BigNumberish>,
    r: PromiseOrValue<BytesLike>,
    s: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    burnWithPermit(
      request: IMRC20.BurnRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    payWithPermit(
      request: IMRC20.PayRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    permit(
      request: IMRC20.PermitRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferWithPermit(
      request: IMRC20.TransferRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "Pay(address,address,string,uint256,uint256)"(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      payId?: null,
      amount?: null,
      fee?: null
    ): PayEventFilter;
    Pay(
      from?: PromiseOrValue<string> | null,
      to?: PromiseOrValue<string> | null,
      payId?: null,
      amount?: null,
      fee?: null
    ): PayEventFilter;
  };

  estimateGas: {
    burnWithPermit(
      request: IMRC20.BurnRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    payWithPermit(
      request: IMRC20.PayRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    permit(
      request: IMRC20.PermitRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferWithPermit(
      request: IMRC20.TransferRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burnWithPermit(
      request: IMRC20.BurnRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    payWithPermit(
      request: IMRC20.PayRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    permit(
      request: IMRC20.PermitRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferWithPermit(
      request: IMRC20.TransferRequestStruct,
      v: PromiseOrValue<BigNumberish>,
      r: PromiseOrValue<BytesLike>,
      s: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}