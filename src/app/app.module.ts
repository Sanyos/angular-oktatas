import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeathermapComponent } from './feature/weathermap/weathermap.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './feature/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    WeathermapComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
