import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/core/services/game/game.service';

@Component({
  selector: 'app-playground',
 templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  numbers:number[] = [];
  errorMessage: string = '';
  rowCount: number = 3;
  lobbyId: number = 0;
  game:number[][] = []
  playableGame$ = this.gameService.playableGame$;

  constructor(public gameService: GameService) {}

  ngOnInit(){
    this.gameService.game$.subscribe(res=>{
      this.game = res;
    })
    this.gameService.errorMessage$.subscribe((res) => {
      this.errorMessage = res;
    });
  }

  newGame():void{
    this.lobbyId = this.gameService.generatePlayground(this.rowCount);
  }

  connectToLobby():void{
    this.gameService.joinLobby(this.lobbyId,2,true);
  }

}
