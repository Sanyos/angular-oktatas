import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

  value = 'Clear me';
  date:Date = new Date();


  ngOnInit(): void {
    console.log("HOME INIT");
    console.log(this.date);
  }

  ngOnDestroy(): void {
    console.log("HOME DESTORY");
  }

}
