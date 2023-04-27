import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './core/services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  loggedIn:boolean = false;

  constructor(private router: Router, private authService: AuthService){}

  ngOnInit(){
    this.authService.checkLoggedIn();
    this.authService.loggedIn$.subscribe((res)=>{
      this.loggedIn = res;
    })
  }

  navigateToHome():void{
    this.router.navigate(['home']);
  }
  navigateToLogin():void{
    this.router.navigate(['auth','login']);
  }

  logout():void{
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
