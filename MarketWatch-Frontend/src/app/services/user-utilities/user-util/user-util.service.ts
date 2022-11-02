import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserUtilService {
  private transactionsUrl = "http://localhost:8081/userutil-api/api/transaction";  
  private watchlistUrl = "http://localhost:8081/userutil-api/api/watchlist"; 
  private walletUrl = "http://localhost:8081/userutil-api/api/wallet";
  private portfolioUrl = "http://localhost:8081/userutil-api/api/portfolio";
  private token=this._service.getBearerToken();

  headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Access-Control-Allow-Origin": "*",
  }
  
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headerDict), 
  };
  
  constructor(private http:HttpClient,private _service:LoginService) {


   }


  getRequestById(id:number):Observable<any>{
    return this.http.get(`${this.transactionsUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }
  
  getWatchlistById(id:number):Observable<any>{
    return this.http.get(`${this.watchlistUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }

  getPortfolioById(id:number):Observable<any>{
    return this.http.get(`${this.portfolioUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }

  getWalletById(id:number):Observable<any>{
    return this.http.get(`${this.walletUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }

}
