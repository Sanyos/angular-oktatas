import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { currencies } from 'src/app/core/data/currencies.data';
import { ExchangeService } from 'src/app/core/services/exchange/exchange.service';
import { Currency } from 'src/app/core/types/currency.type';

@Component({
  selector: 'app-currency-change',
  templateUrl: './currency-change.component.html',
  styleUrls: ['./currency-change.component.scss']
})
export class CurrencyChangeComponent {

  constructor(private readonly exchangeService: ExchangeService){}

  inputCurrencies: Currency[] = [{symbol:'EUR', name: 'Euró'}, {symbol:'TMP', name: 'TESZ VALUTA'}];
  outPutCurrencies: Currency[] = currencies;
  fromCurrency: Currency |null = null;
  fromSum: number = 0;
  toCurrency: Currency |null = null;
  toSum:Observable<number> = this.exchangeService.toSum$;

  currencyChanged(selectedCurrency:Currency, changedParam:string ){
    if(changedParam === 'from'){
      this.fromCurrency = selectedCurrency;
      this.exchangeService.setFromCurrency(selectedCurrency);
    }else{
      this.toCurrency = selectedCurrency;
    }

    if(this.fromCurrency && this.toCurrency){
      this.exchangeService.getHistory(this.toCurrency);
    }

  }

  exchangeMoney(){
    if(this.fromCurrency && this.toCurrency){
      this.exchangeService.exchangeCurrency(this.toCurrency.symbol,this.fromSum);
    }else{
      alert("Töltse ki az összes mezőt!");
    }

  }
}
