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
        data:history, label:'',fill:true,borderWidth: 1
    }];
    this.lineChartLabels=Array.from({
        length: history.length
    }, (v,i) => {
        {return (15.00+i*0.15).toString()};
    });
;
    this.lineChartOptions={ responsive: true,
        scales: {
          xAxes: [{
            ticks: {
                autoSkip: true,
                maxTicksLimit: 12
            },
              gridLines: {
                  drawOnChartArea: true,
                  display: true,
              }
          }],
          yAxes: [{
              gridLines: {
                  drawOnChartArea: true,
                  display: true,
              },
              ticks: {
                display: true
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