import { Component, OnInit, SimpleChange } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { MyChart } from 'src/app/models/MyChart';
// import { MyChart } from 'src/app/models/chart-model/MyChart';
import { Portfolio } from 'src/app/models/portfolio';
import { Stock } from 'src/app/models/stock-models/Stock';
import { Transaction } from 'src/app/models/transaction';
import { Wallet } from 'src/app/models/wallet';
import { StockService } from 'src/app/services/stock/stock.service';
import { UserUtilService } from 'src/app/services/user-util/user-util.service';
import { MyChart } from 'src/app/models/MyChart';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stock!: Stock;
  transaction: Transaction = new Transaction();
  wallet: Wallet = new Wallet();
  portfolio: Portfolio = new Portfolio();
  wallet_balance = sessionStorage.getItem("wallet_balance")
  userid = sessionStorage.getItem("userid");
  buyForm: FormGroup ;
  sellForm: FormGroup;
  isEnabled: boolean = false;

  id=2;
  constructor(private _service: StockService,
    private _router: ActivatedRoute,
    private _userservice: UserUtilService
  ) {
    this.id = parseInt(this._router.snapshot.paramMap.get('id'));
    // this._service.getStockById(this.id).subscribe(
    //   data => {
    //     console.log()
    //     console.log(data);
       
    //     this.stock = data;
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // )
    this._userservice.getWalletById(parseInt(this.userid)).subscribe(

      data=>{

        this.wallet.balance_amount = data.balance_amount;
        console.log(data);

      },
      error=>{console.log(error);}

    )

    let val = {

      "stock_id": this.id,

      "user_id": this.userid

    }

    this._userservice.getPortfolioById(val).subscribe(

      data=>{

        this.portfolio.quantity = data.quantity;


      }  

    )
    this.buyForm = new FormGroup(
      {
        buyamount: new FormControl(this.transaction.amount, [Validators.required, Validators.min(50), (control: AbstractControl) => Validators.max(this.wallet.balance_amount)(control)]),
        buystock: new FormControl(this.transaction.quantity, [Validators.required]),
        category: new FormControl(this.portfolio.portfolio_type, [Validators.required])
      }
    );
    this.sellForm = new FormGroup({
      sellamount: new FormControl([Validators.required]),
      sellstock: new FormControl(this.transaction.quantity, [Validators.required, (control: AbstractControl) => Validators.max(this.portfolio.quantity)(control), Validators.min(0)])
    });
    this._userservice.getWatchlistById(parseInt(this.userid)).subscribe(
      data=>{
          data.forEach((watch:any)=>{
              if(watch.stock_id == this.id){
                var x = document.getElementById("addtofav").innerText;
                if (x=="Add to Watchlist") {
                    document.getElementById("addtofav").innerText  = "Added to Watchlist";
                }
                this.isEnabled = true;
              }
          })
      }
    )

  }

  get f() {
    return this.buyForm.controls;
  }

  get f1() {
    return this.sellForm.controls;
  }
  fetchData() {
    return this._service.getStockById(this.id).toPromise().then(
      data => {
        this.stock = data
      }
    ).catch(error => { console.log(error) })
  }
  ngOnInit(): void {
    
    this.fetchData().then(() =>
      this.addCharts(this.stock));
    this.buyForm.controls['category'].setValue(this.portfolio.portfolio_type, { onlySelf: true });
    this.calculateStock();
    this.calculateAmount();

  }
  addtowatchlist(event: MouseEvent){
    const watchlist = {
      "stock_id": this.id,
      "stock_name":this.stock.name,
      "user_id":this.userid,
      "esg_score":this.stock.esgScore
    }
    var x = document.getElementById("addtofav").innerText;
    if (x=="Add to Watchlist") {
        document.getElementById("addtofav").innerText  = "Added to Watchlist";
    }
    (event.target as HTMLButtonElement).disabled = true;
    this._userservice.addToWatchlist(watchlist).subscribe(
      data=>{console.log(data);},
      error=>{console.log(error);}
    )
  }
  calculateStock() {
    this.buyForm.get('buyamount').valueChanges.subscribe(val => {
      console.log(val);
      this.buyForm.get('buystock').setValue(val / this.stock.instPrice);

    });
  }
  calculateAmount() {
    this.sellForm.get('sellstock').valueChanges.subscribe(val => {
      this.sellForm.get('sellamount').setValue(val * this.stock.instPrice);
    });
  }
  // sellFormSubmission(data: any) {
  //   const walletdata = {
  //     "id": 1,
  //     "type": 1,
  //     "amount": data.sellamount
  //   }
  //   console.log(data.sellamount);
  //   this._userservice.addToWallet(walletdata).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  //   sessionStorage.setItem("wallet_balance", data.balance_amount);
  //   //window.location.reload();
  // }
  // buyFormSubmission(data: any) {
  //   console.log(this.wallet.balance_amount)
  //   const walletdata = {
  //     "id": 1,
  //     "type": 0,
  //     "amount": data.buyamount
  //   }
  //   console.log(data.buyamount);
  //   this._userservice.addToWallet(walletdata).subscribe(
  //     data => {
  //       console.log(data);
  //     },
  //     error => {
  //       console.log(error);
  //     }
  //   )
  //   sessionStorage.setItem("wallet_balance", data.balance_amount);
  //  // window.location.reload();
  // }

  sellFormSubmission(data:any){
    const walletdata = {
      "id":this.userid,
      "type":1,
      "amount":data.sellamount
    }
    console.log(data.sellamount);
    this._userservice.addToWallet(walletdata).subscribe(
      data=>{
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
    const transactiondata = {
      "user_id":this.userid,
      "stock_name": this.stock.name,
      "quantity": ((1)*data.sellstock),
      "time": new Date(),
      "type": '0',
      "current_price": this.stock.instPrice,
      "amount": ((1)*data.sellamount)
     }
     const portfolio_data = {
      "user_id": this.userid,
      "stock_id":this.id,
      "stock_name":this.stock.name,
      "portfolio_type":data.category,
      "esg_score":this.stock.esgScore,
      "investedPrice":((-1)*data.sellamount),
      "quantity": ((-1)*data.sellstock)
     }
     this._userservice.addToPortFolio(portfolio_data).subscribe(
       data=>{
         console.log(data);
       },
       error=>{
         console.log(error);
       }
     )

     this._userservice.addToTransaction(transactiondata).subscribe(
         data=>{
           console.log(data);
         },
         error=>{
           console.log(error);
         }
     )
     alert("Transaction Successful. Successfully sold "+data.sellstock+ " of "+this.stock.name);
    sessionStorage.setItem("wallet_balance", data.balance_amount );
    window.location.reload();
  }



  buyFormSubmission(data:any){
    console.log(this.wallet.balance_amount)
    const walletdata = {
      "id":this.userid,
      "type":0,
      "amount":data.buyamount
    }
    console.log(data.buyamount);
    this._userservice.addToWallet(walletdata).subscribe(
      data=>{
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
   const transactiondata = {
    "user_id":this.userid,
    "stock_name": this.stock.name,
    "quantity": data.buystock,
    "time": new Date(),
    "type": '1',
    "current_price": this.stock.instPrice,
    "amount": data.buyamount
   }
   const portfolio_data = {

    "user_id": this.userid,
    "stock_id":this.id,
    "stock_name":this.stock.name,
    "portfolio_type":data.category,
    "esg_score":this.stock.esgScore,
    "investedPrice":data.buyamount,
    "quantity": data.buystock
  }
  this._userservice.addToPortFolio(portfolio_data).subscribe(
    data=>{console.log(data);},
    error=>{console.log(error);}
  )
   this._userservice.addToTransaction(transactiondata).subscribe(
       data=>{
         console.log(data);
       },
       error=>{
         console.log(error);
       }
   )
   alert("Transaction Successful. Successfully Bought "+data.buystock+ " of "+this.stock.name);
    sessionStorage.setItem("wallet_balance", data.balance_amount );
    window.location.reload();
  }
  setDelay(i) {
    setTimeout(function () {
      console.log(i);
    }, 1000);
  }
  addCharts(stock: Stock) {
    for (let i = 1; i <= 5; ++i) {
      this.setDelay(i);
    }
    console.log(stock.todaysReport.history);
    const color = (stock.percChange < 0) ? '#fc0367' : '#03fc9d';
    this.stock.chart = new MyChart(stock.todaysReport.history, color);
  }

}
