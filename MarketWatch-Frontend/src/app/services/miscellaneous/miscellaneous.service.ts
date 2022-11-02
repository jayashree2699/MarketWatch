import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HomePageModel } from 'src/app/models/HomePageModel';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  constructor(private http:HttpClient) { }

  private baseUrl = "http://localhost:9014/"
  getData(): Observable<HomePageModel>{
    return  this.http.get<HomePageModel>(this.baseUrl);
  }

}
