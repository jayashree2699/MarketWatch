
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { LoginService } from 'src/app/services/login/login.service';
import { UserUtilService } from 'src/app/services/user-util/user-util.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  loading=false;
  error=false;
 signupForm: FormGroup;
 submitted=false;


  constructor(private service:LoginService, private _walletservice:UserUtilService, private _fb: FormBuilder, private _router:Router) { }

  ngOnInit(): void {
    this.signupForm=this._fb.group({
      fullname:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      cpassword:['',Validators.required]
    },
    {
      validator: MustMatch('password','cpassword')
    }
    );
  }

  get f(){ return this.signupForm.controls;}
  onSubmit():void{

    this.submitted=true;

    if(this.signupForm.invalid){
      return;
    }
    this.loading=true;
    let user={
      "username":this.signupForm.get('email').value,
      "password":this.signupForm.get('password').value,
      "name":this.signupForm.get('fullname').value
    }
    console.log(user);

    this.service.signup(user).subscribe(
      data=>{console.log(data);
        let  wallet={
          "user_id":data.id,
          "balance_amount":1000
        }
        this._walletservice.createWallet(wallet).subscribe(
          (wdata)=>{console.log(wdata);},
          (error)=>{console.log(error)}
        );
        this.loading=false;
        alert("Signup successfull!!!")
      this._router.navigate(['login']);
      }
    ,
    (error:any)=>{
        console.log(error);
        this.loading=false;
        this.error=true;
    }
    )
  }
}
