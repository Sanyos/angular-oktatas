import { Component } from '@angular/core';
import { ExchangeService } from './core/services/exchange/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = '';

  constructor(private readonly exchangeService: ExchangeService){
    this.init();
  }

  private init(){
    this.exchangeService.getRates();
  }

}
