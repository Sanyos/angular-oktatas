import { Injectable } from '@angular/core';
import  {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from 'src/environments/environments';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private readonly http: HttpClient) { }


  exchangeCurrency(): Observable<any>{
    return this.getRequest(environment.exchangeratesapi.apiUrl, environment.exchangeratesapi.endpoints.getRates)
  }

  getStats(date:string, toCurrency: string):Observable<any>{
    return this.getRequest(environment.exchangeratesapi.statUrl, date, {base:"EUR", symbols:toCurrency})
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
