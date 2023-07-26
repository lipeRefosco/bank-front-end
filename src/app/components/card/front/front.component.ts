import { Component, Input } from '@angular/core';
import { AccountDataModel, accountDefault } from 'src/app/model/accountDataModel';

@Component({
  selector: 'app-card-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent {
  @Input() name: string = accountDefault.name;
  
  @Input() account: any = accountDefault.account;

  @Input() card: any = accountDefault.card

}
