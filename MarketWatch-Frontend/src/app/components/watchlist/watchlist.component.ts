import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock.service';
import { UserUtilService } from 'src/app/services/user-utilities/user-util/user-util.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css','../../../assets/css/custom.css','../../../assets/vendor/datatables/dataTables.bootstrap4.min.css']
})
export class WatchlistComponent implements OnInit {
  
  requests:any=[];
  constructor(private userService:UserUtilService,private _service:StockService) {
    /*let start=0;
    if(start==0){
      window.location.reload();
      start=1;
    }*/
    
   }

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
    this.userService.getWatchlistById(parseInt(sessionStorage.getItem('userid'))).
    subscribe(data=>{
      data.forEach((request:any)=>{

        
        
         this._service.getStockById(request.stock_id).subscribe(
           stock => {
             console.log(stock);
             request.live_price = stock.instPrice.toFixed(2);
            //  console.log(request.live_price);
            //  request.gain_loss_percent = (((request.live_price*request.quantity.toFixed(2) - request.investedPrice)/request.investedPrice)*100).toFixed(2);
           },
           error => {
             console.log(error);
           }
         )
    
         this.requests.push(request);

         
        

      })
      }
    ,error=>{console.log(error);})
  }

}
