import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Stats } from 'src/app/core/types/stats.type';

@Injectable({
  providedIn: 'root'
})
export class MockStatsService {

  constructor() { }

  mockStats(date:string,toCurrency:string): Observable<Stats>{

  let mockResponse:Stats = this.generateStat(date,toCurrency)
   return new Observable<Stats>((observer)=>{
    observer.next(mockResponse);
    observer.complete();
   });
  }

  private generateStat(date:string,toCurrency:string):Stats{

  let data:Stats = {
      "success": true,
      "historical": true,
      "date": date,
      "timestamp": new Date().getTime(),
      "base": "EUR",
      "rates": {}
    };

    data.rates[toCurrency] = Math.random();

    return data;

  }

}
