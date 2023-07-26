import { Component, OnInit } from '@angular/core';
import { AccountDataModel, accountDefault } from 'src/app/model/accountDataModel';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(private service: CardsService) { }

  accountData: AccountDataModel = accountDefault;

  ngOnInit(): void {
    this.getAccountData()
  }

  getAccountData(): void  {
    this.service.getCard().subscribe(data => {
      this.accountData = data
    })
  }
}
