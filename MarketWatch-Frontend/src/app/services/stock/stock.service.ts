import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  private _baseRequestsUrl = "http://localhost:8081/stock-api/api/stock";
  constructor(private _http:HttpClient,private _service:LoginService) { }

  getAllStocks():Observable<any>{
    //let token=this._service.getBearerToken();
    let url = "http://localhost:9004/api/stock"
    return this._http.get(`${url}`);
    //return this._http.get(this._baseRequestsUrl,{headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)});
  }
  getStockById(id:number):Observable<any>{
    let token=this._service.getBearerToken();
    let url = "http://localhost:9004/api/stock";
    return this._http.get(`${url}/${id}`);
   // return this._http.get(`${this._baseRequestsUrl}/${id}`,{headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)})
  }
}
