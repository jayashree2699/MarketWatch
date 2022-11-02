import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { StockService } from 'src/app/services/stock/stock.service';
import { Location } from '@angular/common';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public codeValue!: string;

  codeList = [{name:'',id:''}];

  public saveCode(e:any): void {
    let name = e.target.value;
    let list = this.codeList.filter(x => x.name === name)[0];
    console.log("Hiee"+list.id);
    let url: string = "/stocks/" + list.id;
    //this._router.navigate(['stocks',list.id]);
    this._router.navigateByUrl(url);
    //this._location.replaceState(url);
   // this._location.go(url);
  //location.reload();
  }

  public logout():void{
    sessionStorage.clear();
    // sessionStorage.setItem("jwt","");
    // sessionStorage.setItem("userid","");
    this._router.navigate(['login']);  }

  constructor(private service:StockService, private _router:Router,private _route:ActivatedRoute,private _location:Location, private loginservice:LoginService) {
    this.loginservice.isUserAuthenticated().then(
      data=>{
        console.log("data");
        if(data == true){
          document.getElementById('authenticate').innerText = "Logout";
        }
        else{
          document.getElementById('authenticate').innerText = "Log In";
        }
      },
      error=>{
        console.log(error);
        document.getElementById('authenticate').innerText = "Log In";
      }
    ) 
   }

  ngOnInit(): void {
    this.service.getAllStocks().subscribe(
      (data)=>{
        for(var d of data){
          this.codeList.push({
            id: d.id,
            name: d.name
          })
        }
        
      }
    )
  }

  goToSingle(type:String){
    console.log("hi");
    this._router.navigate([type]);
  }
}
