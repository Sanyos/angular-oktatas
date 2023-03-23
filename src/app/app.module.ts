import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderComponent } from './shared/image-slider/image-slider.component';
import { HighlightDirective } from './shared/highlight/highlight.directive';
import { SelectButtonComponent } from './shared/select-button/select-button.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageSliderComponent,
    HighlightDirective,
    SelectButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
