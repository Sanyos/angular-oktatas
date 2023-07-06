import { Injectable } from '@angular/core';
import  {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';
import { MockService } from '../mock/mock.service';
import { Stats } from '../../types/stats.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient, private readonly mockService: MockService) { }


  exchangeCurrency(): Observable<any>{
    return this.getRequest(environment.exchangeratesapi.apiUrl, environment.exchangeratesapi.endpoints.getRates.path)
  }

  getStats(date:string, toCurrency: string):Observable<Stats|any>{
    if(environment.exchangeratesapi.endpoints.getStats.mockEndpoint){
      return this.mockService.mockStats(date,toCurrency);
    }else{
      return this.getRequest(environment.exchangeratesapi.statUrl, date, {base:"EUR", symbols:toCurrency})
    }
  }


  private getRequest(baseUrl:string,path: string, params?: any ){
    let queryParams = new HttpParams();

    queryParams = queryParams.append('access_key', environment.exchangeratesapi.apiKey);

    if(params){
      Object.keys(params).forEach(key =>{
        queryParams = queryParams.append(key, params[key]);
      })
    }

    return this.http.get(baseUrl+path,{params:queryParams});

  }

}
