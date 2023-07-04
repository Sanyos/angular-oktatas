import { Component, OnInit } from '@angular/core';
import { ExchangeService } from 'src/app/core/services/exchange/exchange.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(public exchangeService: ExchangeService){}

}
