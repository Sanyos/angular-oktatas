import { Injectable } from '@angular/core';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  postLogin(dataToPost:LoginApi):Observable<LoginResponse>{
    return this.postRequest(environment.api.login, dataToPost);
  }


  private postRequest(path: string, dataToPost?:any):Observable<any>{
    return this.http.post(environment.api.apiBaseUrl + path, dataToPost);
  }
}
