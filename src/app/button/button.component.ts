import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {


  responseRecieved:boolean = false;

  buttonClicked(){

    setTimeout(()=>{
      this.responseRecieved = true;
    }, 5000);
  }

}
