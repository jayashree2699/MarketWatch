import { Chart } from "chart.js";
import { MyChart } from "../chart-model/MyChart";
import { ESGScores } from "./ESGScores";
import { StockReport } from "./StockReport";

export class Stock{
    ide!: string;
    name!: string;
    instPrice!: number;
    percChange!: number;
    totalVolume!: number;
    marketCap!: number;
    description!: any;
    todaysReport!: StockReport;
    weeklyReport!: StockReport;
    monthlyReport!: StockReport;
    esg!: ESGScores;
    esgScore!: number;
    chart!:MyChart;
    color!:string;
    // constructor(){
    //     this.chart.lineChartData=[{
    //         data:this.todaysReport.history, label:'Todays Price'
    //     }];
    //     this.chart.lineChartLabels=[];
    //     this.chart.lineChartOptions={responsive:true};
    //     this.chart.lineChartColors=[{
    //         borderColor: 'black',
    //         backgroundColor: 'rgba(255,255,0,0.28)'
    //     }];
    //     this.chart.lineChartPlugins=[];
    //     this.chart.lineChartType='line';
    // } 
}