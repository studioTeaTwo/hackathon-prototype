/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface OracleInterface extends ethers.utils.Interface {
  functions: {
    "DEFAULT_ADMIN_ROLE()": FunctionFragment;
    "createContractToken(address,string,bool)": FunctionFragment;
    "createPersonalToken(address,string,bool)": FunctionFragment;
    "getRoleAdmin(bytes32)": FunctionFragment;
    "getRoleMember(bytes32,uint256)": FunctionFragment;
    "getRoleMemberCount(bytes32)": FunctionFragment;
    "grantRole(bytes32,address)": FunctionFragment;
    "hasRole(bytes32,address)": FunctionFragment;
    "listContractToken()": FunctionFragment;
    "listPersonalToken()": FunctionFragment;
    "modifyContractToken(uint256,address,string,bool)": FunctionFragment;
    "modifyPersonalToken(address,bool)": FunctionFragment;
    "purge()": FunctionFragment;
    "renounceRole(bytes32,address)": FunctionFragment;
    "revokeRole(bytes32,address)": FunctionFragment;
    "setVerificationContractToken(address)": FunctionFragment;
    "setVerificationPersonalToken(address)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "verificationContractTokenAddress()": FunctionFragment;
    "verificationPersonalTokenAddress()": FunctionFragment;
    "verify(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createContractToken",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "createPersonalToken",
    values: [string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMember",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleMemberCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "listContractToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "listPersonalToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyContractToken",
    values: [BigNumberish, string, string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyPersonalToken",
    values: [string, boolean]
  ): string;
  encodeFunctionData(functionFragment: "purge", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerificationContractToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setVerificationPersonalToken",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "verificationContractTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "verificationPersonalTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "verify", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createContractToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createPersonalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getRoleMemberCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "listContractToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "listPersonalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyContractToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyPersonalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "purge", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setVerificationContractToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setVerificationPersonalToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verificationContractTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "verificationPersonalTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "verify", data: BytesLike): Result;

  events: {
    "Minted(uint256,address,bool)": EventFragment;
    "RoleAdminChanged(bytes32,bytes32,bytes32)": EventFragment;
    "RoleGranted(bytes32,address,address)": EventFragment;
    "RoleRevoked(bytes32,address,address)": EventFragment;
    "VerificationContractTokenAddressSet(address)": EventFragment;
    "VerificationPersonalTokenAddressSet(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Minted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleAdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleGranted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RoleRevoked"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "VerificationContractTokenAddressSet"
  ): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "VerificationPersonalTokenAddressSet"
  ): EventFragment;
}

export type MintedEvent = TypedEvent<
  [BigNumber, string, boolean] & {
    tokenId: BigNumber;
    userAddress: string;
    passed: boolean;
  }
>;

export type RoleAdminChangedEvent = TypedEvent<
  [string, string, string] & {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
>;

export type RoleGrantedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type RoleRevokedEvent = TypedEvent<
  [string, string, string] & { role: string; account: string; sender: string }
>;

export type VerificationContractTokenAddressSetEvent = TypedEvent<
  [string] & { newAddress: string }
>;

export type VerificationPersonalTokenAddressSetEvent = TypedEvent<
  [string] & { newAddress: string }
>;

export class Oracle extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: OracleInterface;

  functions: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<[string]>;

    createContractToken(
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createPersonalToken(
      userAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    listContractToken(overrides?: CallOverrides): Promise<[string]>;

    listPersonalToken(overrides?: CallOverrides): Promise<[string]>;

    modifyContractToken(
      tokenId: BigNumberish,
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    modifyPersonalToken(
      userAddress: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    purge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVerificationContractToken(
      _verificationContractToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setVerificationPersonalToken(
      _verificationPersonalToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verificationContractTokenAddress(
      overrides?: CallOverrides
    ): Promise<[string]>;

    verificationPersonalTokenAddress(
      overrides?: CallOverrides
    ): Promise<[string]>;

    verify(target: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

  createContractToken(
    contractAddress: string,
    countries: string,
    passed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createPersonalToken(
    userAddress: string,
    countries: string,
    passed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

  getRoleMember(
    role: BytesLike,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getRoleMemberCount(
    role: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  hasRole(
    role: BytesLike,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  listContractToken(overrides?: CallOverrides): Promise<string>;

  listPersonalToken(overrides?: CallOverrides): Promise<string>;

  modifyContractToken(
    tokenId: BigNumberish,
    contractAddress: string,
    countries: string,
    passed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  modifyPersonalToken(
    userAddress: string,
    passed: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  purge(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revokeRole(
    role: BytesLike,
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVerificationContractToken(
    _verificationContractToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setVerificationPersonalToken(
    _verificationPersonalToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  verificationContractTokenAddress(overrides?: CallOverrides): Promise<string>;

  verificationPersonalTokenAddress(overrides?: CallOverrides): Promise<string>;

  verify(target: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<string>;

    createContractToken(
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    createPersonalToken(
      userAddress: string,
      countries: string,
      passed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    getRoleAdmin(role: BytesLike, overrides?: CallOverrides): Promise<string>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    listContractToken(overrides?: CallOverrides): Promise<string>;

    listPersonalToken(overrides?: CallOverrides): Promise<string>;

    modifyContractToken(
      tokenId: BigNumberish,
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    modifyPersonalToken(
      userAddress: string,
      passed: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    purge(overrides?: CallOverrides): Promise<void>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVerificationContractToken(
      _verificationContractToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setVerificationPersonalToken(
      _verificationPersonalToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    verificationContractTokenAddress(
      overrides?: CallOverrides
    ): Promise<string>;

    verificationPersonalTokenAddress(
      overrides?: CallOverrides
    ): Promise<string>;

    verify(target: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "Minted(uint256,address,bool)"(
      tokenId?: null,
      userAddress?: string | null,
      passed?: null
    ): TypedEventFilter<
      [BigNumber, string, boolean],
      { tokenId: BigNumber; userAddress: string; passed: boolean }
    >;

    Minted(
      tokenId?: null,
      userAddress?: string | null,
      passed?: null
    ): TypedEventFilter<
      [BigNumber, string, boolean],
      { tokenId: BigNumber; userAddress: string; passed: boolean }
    >;

    "RoleAdminChanged(bytes32,bytes32,bytes32)"(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    RoleAdminChanged(
      role?: BytesLike | null,
      previousAdminRole?: BytesLike | null,
      newAdminRole?: BytesLike | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; previousAdminRole: string; newAdminRole: string }
    >;

    "RoleGranted(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleGranted(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "RoleRevoked(bytes32,address,address)"(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    RoleRevoked(
      role?: BytesLike | null,
      account?: string | null,
      sender?: string | null
    ): TypedEventFilter<
      [string, string, string],
      { role: string; account: string; sender: string }
    >;

    "VerificationContractTokenAddressSet(address)"(
      newAddress?: string | null
    ): TypedEventFilter<[string], { newAddress: string }>;

    VerificationContractTokenAddressSet(
      newAddress?: string | null
    ): TypedEventFilter<[string], { newAddress: string }>;

    "VerificationPersonalTokenAddressSet(address)"(
      newAddress?: string | null
    ): TypedEventFilter<[string], { newAddress: string }>;

    VerificationPersonalTokenAddressSet(
      newAddress?: string | null
    ): TypedEventFilter<[string], { newAddress: string }>;
  };

  estimateGas: {
    DEFAULT_ADMIN_ROLE(overrides?: CallOverrides): Promise<BigNumber>;

    createContractToken(
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createPersonalToken(
      userAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    listContractToken(overrides?: CallOverrides): Promise<BigNumber>;

    listPersonalToken(overrides?: CallOverrides): Promise<BigNumber>;

    modifyContractToken(
      tokenId: BigNumberish,
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    modifyPersonalToken(
      userAddress: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    purge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVerificationContractToken(
      _verificationContractToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setVerificationPersonalToken(
      _verificationPersonalToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verificationContractTokenAddress(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verificationPersonalTokenAddress(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verify(target: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DEFAULT_ADMIN_ROLE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createContractToken(
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createPersonalToken(
      userAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getRoleAdmin(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMember(
      role: BytesLike,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getRoleMemberCount(
      role: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    hasRole(
      role: BytesLike,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    listContractToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    listPersonalToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modifyContractToken(
      tokenId: BigNumberish,
      contractAddress: string,
      countries: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    modifyPersonalToken(
      userAddress: string,
      passed: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    purge(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revokeRole(
      role: BytesLike,
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVerificationContractToken(
      _verificationContractToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setVerificationPersonalToken(
      _verificationPersonalToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verificationContractTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verificationPersonalTokenAddress(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verify(
      target: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
