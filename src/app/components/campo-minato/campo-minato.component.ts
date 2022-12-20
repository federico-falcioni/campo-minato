import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Board } from 'src/app/Models/board';
import { Cell } from 'src/app/Models/cell';

@Component({
  selector: 'app-campo-minato',
  templateUrl: './campo-minato.component.html',
  styleUrls: ['./campo-minato.component.css']
})
export class CampoMinatoComponent implements OnInit {
  board!: Board;
  constructor() {
    this.reset();
  }

  ngOnInit(): void {

  }

  checkCell(cell: Cell){
    const result = this.board.checkCell(cell);
    if(result === 'gameover'){
      alert('You lose');
    }else if(result === 'win'){
      alert("You win");
    }
  }

  flag(cell: Cell){
    if(cell.status === 'flag'){
      cell.status = 'open'
    }else {
      cell.status = 'flag';
    }
  }

  reset(){
    this.board = new Board(20,50);
  }

}


