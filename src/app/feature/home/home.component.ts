import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  value = 'Clear me';
  date:Date = new Date();
  loggedIn:boolean = false;

  @ViewChild('mySwal')
  public readonly mySwal!: SwalComponent;

  ngOnInit(): void {

    console.log("HOME INIT");
    console.log(this.date);
  }

fire(){
  console.log(this.mySwal);
}

  ngOnDestroy(): void {
    console.log("HOME DESTORY");
  }

}
