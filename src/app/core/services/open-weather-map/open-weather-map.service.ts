import { Injectable } from '@angular/core';
import { Coords } from 'src/app/shared/types/coords.type';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {

  constructor() { }

  getWeatherData(coords:Coords){

  }
}
