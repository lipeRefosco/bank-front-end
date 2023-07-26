import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { environments } from '../environments/environments';
import { Observable } from 'rxjs';
import { AccountDataModel } from '../model/accountDataModel';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  private apiURL = environments.API_URL;

  constructor(private http: HttpClient) { }

  getCard(): Observable<AccountDataModel> {
    return this.http.get<AccountDataModel>(this.apiURL)
  }
}
