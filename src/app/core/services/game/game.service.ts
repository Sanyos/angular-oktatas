import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {


  fieldCount: number = 9;
  game: number[][] = [];
  activePlayerIndex:number = 1;

  private errorMessage = new BehaviorSubject<string>('');
  errorMessage$ = this.errorMessage.asObservable();

  constructor() { }

  generatePlayground():void{
    this.game = [];
    for(let i=0; i<3; i++){
      this.game.push([]);
      for(let j=0; j<3; j++){
        this.game[i].push(0);
      }
    }
  }

  fieldPressed(i:number, j:number):number{
    let status = this.activePlayerIndex;
    if (this.game[i][j] === 0) {
      this.game[i][j] = this.activePlayerIndex;
      this.errorMessage.next("");
      this.switchPlayer();
      console.log(this.game);
    }else{
      this.errorMessage.next("Nem kattinthatsz erre a mezőre!");
      console.log('Hibás kattintás');
      status = -1;
    }
    return status;
  }

  switchPlayer(){
    if(this.activePlayerIndex === 1){
      this.activePlayerIndex = 2;
    }else{
      this.activePlayerIndex = 1;
    }
  }
}
