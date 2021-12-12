import { Component } from '@angular/core';

@Component({
  selector: 'app-landings',
  templateUrl: './games.container.html',
  styleUrls: ['./games.container.scss'],
})
export class GamesContainer {
  public gameId: number = 1;
  public menuItems: { id: number, name: string }[] = [
    { id: 1, name: 'Tik Tak Toe' },
    { id: 2, name: 'Find the same' },
    { id: 3, name: 'Snake' },
    { id: 4, name: 'Bubbles' },
    { id: 5, name: 'Sudoku' },
  ];

  public changeGameId(id: number): void {
    this.gameId = id;
  }

}
