import { Component } from '@angular/core';
import { currencies } from 'src/app/core/data/currencies.data';
import { ExchangeService } from 'src/app/core/services/exchange/exchange.service';
import { BarChartDataset } from 'src/app/core/types/bar-chart-dataset.type';
import { Currency } from 'src/app/core/types/currency.type';

@Component({
  selector: 'app-currency-rate',
  templateUrl: './currency-rate.component.html',
  styleUrls: ['./currency-rate.component.scss']
})
export class CurrencyRateComponent {

  labels:string[] = [];
  datasets:BarChartDataset[] = [];
  fromCurrency: string = '';

  constructor(private readonly exchangeService: ExchangeService){}

  ngOnInit(){
    this.exchangeService.fromCurrency$.subscribe((curr: Currency|null)=>{
      console.log("FELIRATKOZVA", curr);
      if(this.exchangeService.rates && curr){
        this.fromCurrency = curr.name;
        let tmpDataset: BarChartDataset = {
          label: this.fromCurrency +" értéke",
          backgroundColor: "blue",
          data: []
        }
        currencies.forEach((currency:Currency)=>{
          this.labels.push(currency.name);
          tmpDataset.data.push(this.exchangeService.rates[currency.symbol]);
        })
        this.datasets.push(tmpDataset);
      }

    });

  }

}
