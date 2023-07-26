import { Component, Input } from '@angular/core';
import { accountDefault } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css']
})
export class BackComponent {
  @Input() balance: number = accountDefault.account.balance;
  @Input() limit: number = accountDefault.account.limit;
}
