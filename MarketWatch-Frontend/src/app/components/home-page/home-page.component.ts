import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HomePageModel } from 'src/app/models/HomePageModel';
import { MiscellaneousService } from 'src/app/services/miscellaneous/miscellaneous.service';

import { Chart, ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { MyChart } from 'src/app/models/chart-model/MyChart';
import { Stock } from 'src/app/models/stock-models/Stock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  //news,trendingStocks,topGainers,topLosers
  constructor(private miscellaneous: MiscellaneousService, private http : HttpClient) { }
  homePageResponse!: HomePageModel;
  ngOnInit(): void {
    //ask microservice to send data
    this.miscellaneous.getData()
                      .subscribe((response) => {
                        console.log(response);
                        this.homePageResponse = new HomePageModel();
                        this.homePageResponse = response;
                        this.addCharts(this.homePageResponse.allStocks),
                        this.addCharts(this.homePageResponse.trendingStocks),
                        this.addCharts(this.homePageResponse.topGainers),
                        this.addCharts(this.homePageResponse.topLosers)
                        //this.homePageResponse.allStocks[0].chart=new MyChart();
                        console.log(this.homePageResponse.allStocks[0].todaysReport.history);
                      });
   setInterval(()=> { this.myFunc() }, 30 * 1000);
  }
  //fetch data every now and then
  myFunc(){
    this.miscellaneous.getData()
                      .subscribe((response) => {
                        console.log(response);
                        this.homePageResponse = new HomePageModel();
                        this.homePageResponse = response;
                        this.homePageResponse.allStocks.sort(function(a, b) {
                          return b.percChange - a.percChange;
                      });
                        this.addCharts(this.homePageResponse.allStocks),
                        this.addCharts(this.homePageResponse.trendingStocks),
                        this.addCharts(this.homePageResponse.topGainers),
                        this.addCharts(this.homePageResponse.topLosers)
                        //this.homePageResponse.allStocks[0].chart=new MyChart();
                        console.log(this.homePageResponse.allStocks[0].todaysReport.history);
                      });
  }
  addCharts(response: Stock[]){
    var n=response.length;
    for(var i=0;i<n;i++){
      const color = (response[i].percChange<0)?'#fc0367':'#03fc9d';
      response[i].color = color;
      response[i].chart = new MyChart(response[i].todaysReport.history,color);
      
    }
  }
}
