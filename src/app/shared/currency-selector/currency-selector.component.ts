import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ExchangeService } from 'src/app/core/services/exchange/exchange.service';
import { Currency } from 'src/app/core/types/currency.type';

@Component({
  selector: 'app-currency-selector',
  templateUrl: './currency-selector.component.html',
  styleUrls: ['./currency-selector.component.scss']
})
export class CurrencySelectorComponent implements OnInit {

  @Input() label: string = "";
  currencies: Currency[] = [{symbol:"EUR", name:"Euró"}]
  @Output() currencyChanged: EventEmitter<Currency> = new EventEmitter();

  currencyForm: FormGroup;

  constructor(){
    this.currencyForm = new FormGroup({
      currency: new FormControl(null)
    })
  }
  ngOnInit():void{
    this.currencyForm.controls['currency'].valueChanges.subscribe((value)=>{
      const output= this.currencies.find(curr => curr.symbol === value);
      this.currencyChanged.emit(output);
    })
  }

  hello(){
    console.log("hello");
  }

}
