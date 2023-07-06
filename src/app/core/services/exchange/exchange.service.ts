import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { BehaviorSubject, Subject } from 'rxjs';
import { Currency } from '../../types/currency.type';
import { Stats } from '../../types/stats.type';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {


  private toSum: BehaviorSubject<number> = new BehaviorSubject(0);
  toSum$ = this.toSum.asObservable();

  private fromCurrency: BehaviorSubject<null|Currency> = new BehaviorSubject<null|Currency>(null);
  fromCurrency$ = this.fromCurrency.asObservable();


  rates: any = null

  private stats: Subject<object> = new Subject();
  stats$ = this.stats.asObservable();



  constructor(private readonly http: HttpService) { }


  exchangeCurrency(to:string, fromSum: number): void{
    const toSum = fromSum*this.rates[to];
    this.toSum.next(toSum);
  }

  getRates():void{
    this.http.exchangeCurrency().subscribe((res)=>{
      this.rates = res.rates;
    })
  }

  setFromCurrency(newFromCurrency: Currency): void{
    this.fromCurrency.next(newFromCurrency);
  }

  getHistory(toCurrency:Currency):void{
     let dates:string[] = this.generateDates();

     let statDefault:any = {};
     dates.forEach(date=>{
      statDefault[date]=null;
     });

     this.stats.next(statDefault);

     let tmp = statDefault;

     dates.forEach(date=>{
      this.http.getStats(date, toCurrency.symbol).subscribe((res:Stats)=>{

        tmp[res.date] = res.rates[toCurrency.symbol]
        this.stats.next(tmp);
      });
     });

  }

  private generateDates():string[]{

    let dates: string[] = [];

    for(let i=0; i<7;i++){
        let d = new Date();
        d.setDate(d.getDate() - i);

        let month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2){
          month = '0' + month;
        }
        if (day.length < 2){
          day = '0' + day;
        }
        dates.push([year, month, day].join('-'));
    }
    return dates.reverse();
  }

}
