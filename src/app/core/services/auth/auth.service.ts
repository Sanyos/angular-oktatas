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

  private loggedIn = new BehaviorSubject<boolean>(false);
  loggedIn$ = this.loggedIn.asObservable();



  constructor(private httpSerivce: HttpService) { }


  checkLoggedIn(){
    if(this.isLoggedIn()){
      this.loggedIn.next(true);
    }else{
      this.loggedIn.next(false);
    }
  }

  login(loginData:LoginAuth):Observable<LoginResponse>{
    this.isCompany = loginData.login_isCompany;
    this.loggedIn.next(true);
    return this.httpSerivce.postLogin(this.mapLoginDataToLoginApiData(loginData))
  }

  logout(){
    localStorage.removeItem('token');
    this.loggedIn.next(false);
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
