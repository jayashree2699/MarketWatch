import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _url:string = "http://localhost:8081/authenticate";
  constructor(private _http:HttpClient) { }

 

  login(data:any):Observable<any>{
    return this._http.post(this._url, data);
  }

 

  signup(data:any):Observable<any>{
    return this._http.post(`${this._url}/signup`, data);
  }

  isUserAuthenticated():Promise<any>{
    let url = "http://localhost:8081/validate";
    let token=this.getBearerToken();
    console.log("token "+token);
    return this._http.get(url,
      {headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)}).toPromise().then((res)=>{
        console.log("boolean"+res);
        return res;});
   }

   getUserById(id:number):Observable<any>{
    let url = "http://localhost:8081/"+id;
    let token=this.getBearerToken();
    console.log("token "+token);
    return this._http.get(url,
      {headers: new HttpHeaders().set('Authorization',`Bearer ${token}`)});
   
  }

   getBearerToken():string{
    return sessionStorage.getItem("jwt");
  }
}
