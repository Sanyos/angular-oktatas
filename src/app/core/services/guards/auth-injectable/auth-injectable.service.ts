import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInjectableService {

  router = inject(Router);

  constructor() { }


  isAllowed(){
    const authService =  inject(AuthService);
    if(authService.isLoggedIn()){
      return true;
    }else{
      authService.increaseErrorCount();
      this.router.navigate(['auth','login']);
      return false;
    }
  }

}
