import { Injectable } from '@angular/core';
import { Coords } from 'src/app/shared/types/coords.type';
import { HttpService } from '../http/http.service';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenWeatherMapService {


  constructor(private readonly http: HttpService) { }

  getWeatherData(coords:Coords):Observable<any>{
   return this.http.getWeatherData(coords);
  }
}
