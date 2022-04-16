import { Injectable } from '@angular/core';
import { ethers, providers, Signer } from 'ethers';
import { solidityKeccak256 } from 'ethers/lib/utils';
import { BehaviorSubject, Subject } from 'rxjs';
import { PersonalToken } from '../persons/type';
import OracleAbis from './abis/Oracle.json';
import { OracleAddress } from './constants';
import { TransactionService } from './transaction.service';
import { Oracle } from './types/Oracle';

declare global {
  interface Window {
    ethereum?: providers.ExternalProvider;
  }
}

@Injectable({
  providedIn: 'root',
})
export class MetamaskService {
  // status
  isEthereumReady = false;
  currentNetwork = ''; // chainId
  accounts: string[] = [];
  currentAccount = ''; // address

  // contract states
  persons$ = new BehaviorSubject<PersonalToken[]>([]);

  private contract: Oracle;

  constructor(private transactionService: TransactionService) {}

  async connectToMetaMask(): Promise<void> {
    const ethereum = window.ethereum;

    if (!ethereum) {
      throw new Error('MetaMask is not installed!');
    }
    if (!ethereum.isMetaMask) {
      throw new Error('It is not MetaMask!');
    }

    try {
      this.accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      console.log('accounts', this.accounts);
    } catch (error) {
      throw new Error('Failed to get MetaMask Accounts!');
    }
    if (this.accounts === undefined || this.accounts.length === 0) {
      throw new Error('MetaMask does not have any accounts!');
    }

    try {
      this.currentAccount = (ethereum as any).selectedAddress;
      console.log('currentAccount', this.currentAccount);
    } catch (error) {
      throw new Error('Failed to select MetaMask 1st Account!');
    }

    this.currentNetwork = (ethereum as any).networkVersion;
    if (!(this.currentNetwork === '81' || this.currentNetwork === '4369')) {
      throw new Error('Change to Shibuya network!');
    }

    // It's OK
    this.isEthereumReady = true;
    this.setOracle();
  }

  registerPersonalToken(userAddress: string, countries: string[]) {
    if (!this.isEthereumReady) {
      throw new Error('Ethereum not ready!');
    }
    return this.contract
      .createPersonalToken(userAddress, JSON.stringify(countries), true)
      .then(this.handleTx)
      .catch(this.handleError);
  }

  async listPersonalToken() {
    if (!this.isEthereumReady) {
      throw new Error('Ethereum not ready!');
    }

    // parse
    const data = await this.contract.listPersonalToken();
    const decode = ethers.utils.defaultAbiCoder.decode(
      ['tuple(uint256 tokenId, address user, string countries, bool passed)[]'],
      data
    );

    // map
    const list: PersonalToken[] = decode[0].map((token) => {
      return {
        tokenId: token[0].toNumber(),
        user: token[1],
        countries: JSON.parse(token[2]),
        passed: token[3],
      };
    });
    this.persons$.next(list);
  }

  grantRole(address: string) {
    if (!this.isEthereumReady) {
      throw new Error('Ethereum not ready!');
    }

    return this.contract
      .grantRole(solidityKeccak256(['string'], ['MODERATOR_ROLE']), address)
      .then(this.handleTx)
      .catch(this.handleError);
  }

  purge() {
    if (!this.isEthereumReady) {
      throw new Error('Ethereum not ready!');
    }

    return this.contract.purge().then(this.handleTx).catch(this.handleError);
  }

  private setOracle() {
    if (!this.isEthereumReady) {
      throw new Error('Ethereum not ready!');
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    this.contract = new ethers.Contract(
      this.currentNetwork === '81'
        ? OracleAddress.shibuya
        : OracleAddress.local,
      OracleAbis,
      signer
    ) as Oracle;
  }

  private handleTx = (
    tx: ethers.ContractTransaction
  ): ethers.ContractTransaction => {
    this.transactionService.addTx(tx.hash);
    return tx;
  };

  private handleError(error: any): never {
    if (
      error.message.includes(
        'MetaMask Tx Signature: User denied transaction signature'
      )
    ) {
      throw new Error('取り止めました。');
    }
    if (!error.data || !error.data.message) {
      throw new Error('不明なエラーが発生しました。。');
    }

    const message: string = error.data.message;
    if (message.includes('User already exist!')) {
      throw new Error('そのアドレスはすでに登録されています。');
    } else if (message.includes('Contract already exist!')) {
      throw new Error('そのアドレスはすでに登録されています。');
    } else if (message.includes('AccessControl: account')) {
      throw new Error('権限がありません。');
    }

    throw new Error('不明なエラーが発生しました。。');
  }
}
