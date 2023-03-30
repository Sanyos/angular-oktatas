import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  regForm: FormGroup;

  constructor(private readonly httpClient: HttpClient){

    this.regForm = new FormGroup({
      'firstName': new FormControl("Teszt",[Validators.required]),
      'lastName': new FormControl("Elek",[Validators.required,]),
      'age':new FormControl(20,[Validators.required, ]),
    });
  }

  register(){
    if(this.regForm.status !== 'INVALID'){
      console.log("Elküldöm az api kérést ezzel: ",this.regForm.value);
      this.sendRegRequest(this.regForm.value).then((res)=>{


      })
      console.log("Ez a sor a promise után van!!!!");
    }
  }

  private sendRegRequest(data:any):Promise<any>{
    data.age += 1;
     return this.httpClient.post("https://dummyjson.com/users/add",data).toPromise();
  }




}
