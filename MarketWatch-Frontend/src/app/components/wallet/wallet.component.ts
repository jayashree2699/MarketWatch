import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';
import { UserUtilService } from 'src/app/services/user-utilities/user-util/user-util.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {
  requests:any=[];
  email;
  name;
  website;
  mobile;
  constructor(private userService:UserUtilService, private _loginService:LoginService) { }

   ngOnInit(): void {
    this.retrieveRequests();
  }

  retrieveRequests():void{

    this._loginService.getUserById(parseInt(sessionStorage.getItem("userid"))).
    subscribe(data=>{
//   data.forEach((request:any)=>{

        console.log(data);
        this.name=data["name"];
        this.website="http://"+this.name+".com";
        this.mobile="9933447862";
      this.email=data["username"];

     // })
      }
    ,error=>{console.log(error);})
    this.userService.getWalletById(parseInt(sessionStorage.getItem("userid"))).
    subscribe(data=>{
//   data.forEach((request:any)=>{

        this.requests.push(data);
        console.log(data);
        

     // })
      }
    ,error=>{console.log(error);})
  }
}
