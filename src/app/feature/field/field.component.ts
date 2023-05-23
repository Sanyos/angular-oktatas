import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';
import { Coords } from 'src/app/core/types/coords.type';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {

  @Input() fieldCoords: Coords = {i:0,j:0};
  @Input() lineBreakNeeded:boolean = false;
  @Input() fieldStatus:number = 0;
  @Input() playableGame: boolean = false;
  @Output() coords: EventEmitter<Coords> = new EventEmitter();


  constructor(private gameService: GameService){}

  ngOnInit(){}

   async fieldClicked(){
    if(this.playableGame){
      const status = await this.gameService.fieldPressed(this.fieldCoords.i,this.fieldCoords.j);
      if(status>0){
        this.fieldStatus = status;
      }
      console.log(this.fieldCoords, this.lineBreakNeeded);
      this.coords.emit(this.fieldCoords);
    }

  }

}
