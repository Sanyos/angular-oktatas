import { Component } from '@angular/core';
import { CurrencySelectorComponent } from '../currency-selector/currency-selector.component';
import { currencies } from 'src/app/core/data/currencies.data';

@Component({
  selector: 'app-to-currency-selector',
  templateUrl: './to-currency-selector.component.html',
  styleUrls: ['./to-currency-selector.component.scss']
})
export class ToCurrencySelectorComponent extends CurrencySelectorComponent {

  constructor(){
    super();
    super.currencies = currencies;
  }


}
