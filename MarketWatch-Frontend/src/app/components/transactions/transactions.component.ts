import { Component, OnInit } from '@angular/core';
import { UserUtilService } from 'src/app/services/user-utilities/user-util/user-util.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css','../../../assets/css/custom.css','../../../assets/vendor/datatables/dataTables.bootstrap4.min.css']
})
export class TransactionsComponent implements OnInit {

  
  
  requests:any=[];
  constructor(private userService:UserUtilService) { }

   ngOnInit(): void {
    const firstTime = localStorage.getItem('key')
    if(!firstTime){
     localStorage.setItem('key','loaded')
     location.reload()
    }else {
      localStorage.removeItem('key') 
    }
    this.retrieveRequests();
  }

  retrieveRequests():void{
    this.userService.getRequestById(parseInt(sessionStorage.getItem('userid'))).
    subscribe(data=>{
      data.forEach((request:any)=>{

        this.requests.push(request);
        

      })
      }
    ,error=>{console.log(error);})
  }

}
