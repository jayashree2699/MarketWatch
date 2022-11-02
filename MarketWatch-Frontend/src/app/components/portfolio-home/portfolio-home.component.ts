import { PipeResolver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from 'src/app/services/stock/stock.service';
import { UserUtilService } from 'src/app/services/user-utilities/user-util/user-util.service';
import 'chartjs-plugin-labels';

@Component({
  selector: 'app-portfolio-home',
  templateUrl: './portfolio-home.component.html',
  styleUrls: ['./portfolio-home.component.css']
})
export class PortfolioHomeComponent implements OnInit {

  public pieChartLabels:string[] = ['Ethical', 'Community', 'Value-Based','Green','Impact','Mission Related','Socially Responsible','Responsible'];
  public pieChartData:number[] = [1.0, 0.0, 0.0 , 0.0,0.0, 0.0 , 0.0,0.0];
  public pieChartType:string = 'pie';
  public pieChartOptions:any;
  public total_investment:any=0;
 public  current_price:any=0;
 public  percent:any=0.0;
  // events
  public pieChartColors: Array < any > = [{
    backgroundColor: ['rgb(79, 121, 66)', 'rgb(147, 197, 114)', 'rgb(144, 238, 144)','rgb(124, 252, 0)','rgb(50, 205, 50)','rgb(193, 225, 193)','rgb(175, 225, 175)','rgb(0, 163, 108)'],
   borderColour:['white']
    // borderColor: ['rgb(79, 121, 66)', 'rgb(147, 197, 114)', 'rgb(144, 238, 144)','rgb(124, 252, 0)','rgb(138, 154, 91)','rgb(193, 225, 193)','rgb(175, 225, 175)','rgb(0, 163, 108)']  
 }];
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

  constructor(private router:Router,private userService:UserUtilService,private _service:StockService) {
    this.pieChartOptions = {
      plugins: {
        labels: {
          render: 'percentage',
          fontColor: 'white',
          fontSize: 10,
        },
      }
    }
   }


  ngOnInit() {
    this.retrieveRequests();
  }

  

  retrieveRequests(): void {
    var total_count=0;
  
    let map = new Map();  
    map.set("ethical",0);
        map.set("community",0);
        map.set("value",0);
        map.set("green",0);
        map.set("impact",0);
        map.set("mission",0);
        map.set("social",0);
        map.set("responsible",0);
    this.userService.getPortfolioById(parseInt(sessionStorage.getItem('userid'))).
      subscribe(data => {
        data.forEach((request: any) => {
           
        this.total_investment+=request.investedPrice;
        this._service.getStockById(request.stock_id).subscribe(
          stock => {
            console.log(stock);
            this.current_price += stock.instPrice*request.quantity.toFixed(2);
            this.percent = (this.current_price/this.total_investment)*100;
            //console.log(request.live_price);
          //  request.gain_loss_percent = (((request.live_price*request.quantity.toFixed(2) - request.investedPrice)/request.investedPrice)*100).toFixed(2);
          },
          error => {
            console.log(error);
        })
        total_count++;
        

        
            var c = map.get(request.portfolio_type);
            c++;
            map.set(request.portfolio_type,c);
          
        })
        console.log(total_count);
        var i = 0;
        for (let entry of map.entries()) { 
          console.log(entry[0]);
          console.log(entry[1]);
            if(entry[1]!=0){
            this.pieChartData[i]= (entry[1]/total_count) * 100 ;
            }
            else{
              this.pieChartData[i]= 0.0;

            }
            
            
           console.log(i+"hi"+this.pieChartData[i]);
           i++;
        }  
        this.pieChartData = [...this.pieChartData];
     
        //this.percent = [...this.percent];
        
        
      }
        , error => { console.log(error); })
       
        console.log(this.total_investment+" "+this.current_price);
      
  }


  goToSingle(type:String){
    this.router.navigate([type]);
  }
  navigateToSingle(type:String){
    this.router.navigate([`${type}`]);
  }

}
