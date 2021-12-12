import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() public menuItems: { id: number, name: string }[];
  @Output() public changeId: EventEmitter<number> = new EventEmitter<number>();

  public currentItem: number = 1;
  public toggleMenu: boolean = false;

  public changeItem(itemId: number): void {
    this.changeId.emit(itemId);
    this.currentItem = itemId;
    this.toggleMenu = false;
  }
}
