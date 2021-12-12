import { Component } from '@angular/core';

@Component({
  selector: 'app-tricks',
  templateUrl: './tricks.container.html',
  styleUrls: ['./tricks.container.scss'],
})
export class TricksContainer {
  public trickId: number = 1;
  public menuItems: { id: number, name: string }[] = [
    { id: 1, name: 'City' },
    { id: 2, name: 'Before & After' },
    { id: 3, name: 'FlashLight' },
    { id: 4, name: '6 Blocks' },
    { id: 5, name: 'Weekend Circles' },
    { id: 6, name: 'Clock' },
    { id: 7, name: '3D Card' },
    { id: 8, name: '3D Coin' },
    { id: 9, name: 'iPhone' },
  ];

  public changeTrickId(id: number): void {
    this.trickId = id;
  }
}
