import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { LoginApi, LoginResponse } from '../../types/api/login-api.type';
import { LoginAuth } from '../../types/auth/login-auth.type';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isCompany: boolean = false;
  private authErrorCount = new BehaviorSubject<number>(0);
  authErrorCount$ = this.authErrorCount.asObservable();


  constructor(private httpSerivce: HttpService) { }

  login(loginData:LoginAuth):Observable<LoginResponse>{
    this.isCompany = loginData.login_isCompany;
    return this.httpSerivce.postLogin(this.mapLoginDataToLoginApiData(loginData))
  }


  increaseErrorCount():void{
    let nextValue =  this.authErrorCount.value;
    this.authErrorCount.next(++nextValue);
  }

  resetErrorCount():void {
    this.authErrorCount.next(0);
  }



  initUser(userData:LoginResponse):void{
    localStorage.setItem("token", userData.token);
  }

  isLoggedIn():string | null{
   return localStorage.getItem("token");
  }

  private mapLoginDataToLoginApiData(loginData:LoginAuth): LoginApi{
    return {
      username:loginData.login_username,
      password: loginData.login_password
    }
  }
}
