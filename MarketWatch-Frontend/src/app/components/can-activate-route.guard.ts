
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

 


@Injectable({
  providedIn:'root'
})
export class CanActivateRouteGuard implements CanActivate {

 

  constructor(private authservice:LoginService, private _router:Router) {}

 

  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  //    return true;
  // }

 

 async canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean>{
      let validUser=false;
     await this.authservice.isUserAuthenticated().then(
        data=>{validUser=data;}
      ).catch(error=>{console.log(error)})
      
      if(!validUser){
        console.log("hhhhhhhhhhhhhhhhiiiiiiiiiiiiii");
        this._router.navigateByUrl("/login");
      }
    return this.authservice.isUserAuthenticated();
    //return (false).toPromise();
  }

 


}






