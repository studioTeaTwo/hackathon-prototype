import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MetamaskService } from '../ethereum/metamask.service';
import { countryList } from '../shared/constans';
import { addressValidator } from '../shared/function';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss'],
})
export class DebugComponent {
  address = new FormControl('', [Validators.required, addressValidator]);
  countries = new FormControl('', [Validators.required]);
  countryList = countryList;

  constructor(
    private messageService: MessageService,
    private metamaskService: MetamaskService
  ) {}

  async purge() {
    try {
      await this.metamaskService.connectToMetaMask();
    } catch (error: any) {
      this.messageService.error(error.message);
      return;
    }

    try {
      const result = await this.metamaskService.purge();
      this.messageService.info(`txを発行しました!ブロック取り込みまでしばらくお待ちください。 ${result.hash}`);

      localStorage.removeItem('persons');
      localStorage.removeItem('contracts');
    } catch (error) {
      this.messageService.error(error.message);
    }
  }

  async issue() {
    if (this.address.invalid) {
      this.messageService.error('入力が正しくありません。');
      return;
    }

    try {
      await this.metamaskService.connectToMetaMask();
    } catch (error: any) {
      this.messageService.error(error.message);
      return;
    }

    try {
      const result = await this.metamaskService.registerContractToken(
        this.address.value,
        this.countries.value
      );
      this.messageService.info(`txを発行しました!ブロック取り込みまでしばらくお待ちください。 ${result.hash}`);
    } catch (error) {
      this.messageService.error(error.message);
      return;
    }
  }
}
