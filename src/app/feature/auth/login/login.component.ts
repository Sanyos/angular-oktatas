import { Component, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';
import { Subject, takeUntil } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { LoginResponse } from 'src/app/core/types/api/login-api.type';
import { LoginAuth } from 'src/app/core/types/auth/login-auth.type';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  loginForm: FormGroup;
  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;
  private unsubscribe = new Subject<void>();

  constructor(private authSerivce: AuthService, private router: Router, private actRoute: ActivatedRoute){

    this.loginForm = new FormGroup({

      login_username: new FormControl("kminchelle",[Validators.required]),
      login_password: new FormControl("0lelplR",[Validators.required]),
      login_isCompany: new FormControl(null)

    });
  }

  ngOnDestroy(): void {
    console.log("login page destroy");
    this.authSerivce.resetErrorCount();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }


  ngAfterViewInit(){
   this.authSerivce.authErrorCount$.pipe(takeUntil(this.unsubscribe)).subscribe((errorCount:number)=>{
    console.log(errorCount);
    if(errorCount > 0){
      this.mySwal.fire();
    }
   })

  }


  login(){
    if(this.loginForm.valid){
      const formData: LoginAuth = this.loginForm.value;
      this.authSerivce.login(formData).subscribe((res:LoginResponse)=>{
        if(res.id){
          this.authSerivce.initUser(res);
          this.router.navigate(['posts']);
        }else{
          alert("HIBA!");
        }
      });
    }
  }


}
