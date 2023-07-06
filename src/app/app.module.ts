import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './feature/main-page/main-page.component';
import { CurrencySelectorComponent } from './shared/currency-selector/currency-selector.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyChangeComponent } from './feature/main-page/component/currency-change/currency-change.component';
import { CurrencyRateComponent } from './feature/main-page/component/currency-rate/currency-rate.component';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { SecondPageComponent } from './feature/second-page/second-page.component';
import { ToCurrencySelectorComponent } from './shared/to-currency-selector/to-currency-selector.component';
import { CurrencyStatComponent } from './feature/main-page/component/currency-stat/currency-stat.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CurrencySelectorComponent,
    CurrencyChangeComponent,
    CurrencyRateComponent,
    BarChartComponent,
    SecondPageComponent,
    ToCurrencySelectorComponent,
    CurrencyStatComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
