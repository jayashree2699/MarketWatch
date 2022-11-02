import { Component, OnInit } from '@angular/core';
import { UserUtilService } from 'src/app/services/user-utilities/user-util/user-util.service';
import { ActivatedRoute } from '@angular/router'
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-portfolio-single',
  templateUrl: './portfolio-single.component.html',
  styleUrls: ['./portfolio-single.component.css','../../../assets/css/custom.css','../../../assets/vendor/datatables/dataTables.bootstrap4.min.css',]
})
export class PortfolioSingleComponent implements OnInit {

  requests: any = [];
  id: string

  constructor(private userService: UserUtilService, private route: ActivatedRoute,private _service:StockService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    const firstTime = localStorage.getItem('key')
    if(!firstTime){
     localStorage.setItem('key','loaded')
     location.reload()
    }else {
      localStorage.removeItem('key') 
    }

    this.retrieveRequests();
  }

  retrieveRequests(): void {
    this.userService.getPortfolioById(parseInt(sessionStorage.getItem('userid'))).
      subscribe(data => {
        data.forEach((request: any) => {
          
         if(request.portfolio_type==this.id)
         {
         
          this._service.getStockById(request.stock_id).subscribe(
            stock => {
              console.log(stock);
              request.live_price = stock.instPrice*request.quantity.toFixed(2);
              console.log(request.live_price);
              request.gain_loss_percent = (((request.live_price.toFixed(2) - request.investedPrice)/request.investedPrice)*100).toFixed(2);
            },
            error => {
              console.log(error);
            }
          )
     
          this.requests.push(request);

          }
        })
        
      }
        , error => { console.log(error); })
  }


}
