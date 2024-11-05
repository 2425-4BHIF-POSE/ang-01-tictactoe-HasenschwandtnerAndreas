import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent {

}
