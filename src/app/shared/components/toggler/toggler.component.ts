import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggler',
  templateUrl: './toggler.component.html',
  styleUrls: ['./toggler.component.scss']
})
export class TogglerComponent {
  @Output() public toggle: EventEmitter<boolean> = new EventEmitter<boolean>();

  public toggler: boolean = false;
}
