import { Injectable } from '@angular/core';
import { MockStatsService } from './stats/mock-stats.service';
import { Observable } from 'rxjs';
import { Stats } from '../../types/stats.type';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private readonly mockStatsService: MockStatsService) { }


  mockStats(date:string,toCurrency:string): Observable<Stats>{
    return this.mockStatsService.mockStats(date, toCurrency);
  }




}
