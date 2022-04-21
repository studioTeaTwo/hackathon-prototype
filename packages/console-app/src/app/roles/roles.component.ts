import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MetamaskService } from '../ethereum/metamask.service';
import { addressValidator } from '../shared/function';
import { MessageService } from '../shared/message.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss'],
})
export class RolesComponent {
  address = new FormControl('', [Validators.required, addressValidator]);

  constructor(
    private readonly messageService: MessageService,
    private readonly metamaskService: MetamaskService
  ) {}

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
      const result = await this.metamaskService.grantRole(this.address.value);
      this.messageService.info(`txを発行しました!ブロック取り込みまでしばらくお待ちください。 ${result.hash}`);
    } catch (error) {
      this.messageService.error(error.message);
      return;
    }
  }
}
