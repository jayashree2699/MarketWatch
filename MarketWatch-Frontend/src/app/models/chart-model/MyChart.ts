import { ChartDataSets, ChartType } from "chart.js";
import { Color, Label } from "ng2-charts";

export class MyChart{
   lineChartData!:ChartDataSets[];
   lineChartLabels!:Label[];
   lineChartOptions: any;
   lineChartColors!:Color[];
   lineChartLegend!:boolean;
   lineChartPlugins=[];
   lineChartType!:ChartType;
   constructor(history:number[],color:string){
       console.log("Heyaaa",history)
    this.lineChartData=[{
        data:history, label:'',fill:false,borderWidth: 1
    }];
    this.lineChartLabels=Array.from({
        length: history.length
    }, () => 'A');
;
    this.lineChartOptions={ responsive: true,
        scales: {
          xAxes: [{
              gridLines: {
                  drawOnChartArea: false,
                  display: false,
              },
              ticks: {
                display: false
              }
          }],
          yAxes: [{
              gridLines: {
                  drawOnChartArea: false,
                  display: false,
              },
              ticks: {
                display: false
              }
          }],
        },
        elements: {
          point:{
              radius: 0
          }
    }};

    this.lineChartColors=[{
        borderColor: color,
        backgroundColor: 'rgba(255,255,0,0.28)'
    }];
    this.lineChartLegend = false;
    this.lineChartPlugins=[];
    this.lineChartType='line';
   }
}