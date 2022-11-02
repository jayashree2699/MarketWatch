import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 

  loading=false;
  error=false;
  user:any={
    "username":"",
    "password":""
  }

 

  constructor(private service:LoginService,private route:Router) {

 

   }

 

  ngOnInit(): void {
  }
onSubmit(): void{
  let value=false;
    console.log("hi");
    console.log(this.user);
    this.loading=true;
    this.service.login(this.user).subscribe(
      data=>{
        console.log("hidata");
        console.log("----------------------------------------"+data);
        console.log(data["jwt"]);
        sessionStorage.setItem("jwt", data["jwt"]);
        sessionStorage.setItem("userid", data["id"]);
        this.loading=false;
        value=true;
        this.route.navigate(['']);
      },
      (error:any)=>{
        console.log("hierror");
               console.log("hey error "+error);
          this.error=true;
          this.loading=false;
          console.log("Error "+this.error);
          console.log("Loading "+this.loading);
      }
     
    )
  

  }


 

}