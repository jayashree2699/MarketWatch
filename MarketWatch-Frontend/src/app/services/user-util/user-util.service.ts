import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';
 
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

   addToTransaction(data:any):Observable<any>{
    let url = "http://localhost:8081/userutil-api/api/transaction";
    return this.http.post(`${this.transactionsUrl}`, data, {headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }
 
  getRequestById(id:number):Observable<any>{
    return this.http.get(`${this.transactionsUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }
  getWatchlistById(id:number):Observable<any>{
    return this.http.get(`${this.watchlistUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)})
  }
  getWalletById(id:number):Observable<any>{
    return this.http.get(`${this.walletUrl}/${id}`, {headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)});
  }
  addToWallet(data:any):Observable<any>{
    let url = "http://localhost:9002/api/wallet?id="+data.id+"&amount="+data.amount+"&type="+data.type;
    return this.http.post(url, this.requestOptions);
  }
  addToPortFolio(data:any):Observable<any>{
    return this.http.post(`${this.portfolioUrl}`, data, {headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)});
  }
  addToWatchlist(data:any):Observable<any>{
    return this.http.post(`${this.watchlistUrl}`, data, {headers: new HttpHeaders().set('Authorization',`Bearer ${this.token}`)});
  }

createWallet(data:any):Observable<any>{
  return this.http.post("http://localhost:9002/api/wallet/create" , data);
}
getPortfolioById(data:any):Observable<any>{

  let url = "http://localhost:9002/api/portfolio/quantity?stock_id="+data.stock_id+"&user_id="+data.user_id;

  return this.http.get(url, this.requestOptions);

}


 
}