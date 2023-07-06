import { Component } from '@angular/core';
import { ExchangeService } from 'src/app/core/services/exchange/exchange.service';
import { LineChartDataset } from 'src/app/core/types/line-chart-dataset.type';
import { Stats } from 'src/app/core/types/stats.type';

@Component({
  selector: 'app-currency-stat',
  templateUrl: './currency-stat.component.html',
  styleUrls: ['./currency-stat.component.scss']
})
export class CurrencyStatComponent {


  loading:boolean=true;
  labels:string[] = [];
  datasets:LineChartDataset[] = [];

  constructor(private readonly exchange:ExchangeService){}

  ngOnInit(){
    this.exchange.stats$.subscribe((res)=>{
      if(!Object.values(res).includes(null)){
        this.labels = Object.keys(res);
        let dataset:LineChartDataset = {
          label:"Euró árfolyam",
          borderColor:"blue",
          backgroundColor:"blue",
          data: Object.values(res)
        }
        this.datasets=[dataset];
        this.loading = false;
      }
    })
  }

}
