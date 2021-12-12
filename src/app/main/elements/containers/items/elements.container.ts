import { Component } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './elements.container.html',
  styleUrls: ['./elements.container.scss']
})
export class ElementsContainer {
  public itemId: number = 1;
  public menuItems: { id: number, name: string }[] = [
    { id: 1, name: 'Loaders' },
  ];

  public changeLandingId(id: number): void {
    this.itemId = id;
  }

}
