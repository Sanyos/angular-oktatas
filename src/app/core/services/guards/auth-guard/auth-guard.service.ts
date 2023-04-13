import { Injectable, ViewChild } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authService: AuthService, private router: Router) { }


  canActivate(){
    if(this.authService.isLoggedIn()){
      return true;
    }else{
      this.authService.increaseErrorCount();
      this.router.navigate(['auth','login']);
      return false;
    }
  }

}
