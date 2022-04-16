import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  @Output() public close: EventEmitter<void> = new EventEmitter<void>();
  public absctacts: any = [
    {
     class: 'main-figure',
    },
    {
      class: 'circle',
    },
    {
      class: 'slide-toggler',
    },
    {
      class: 'square',
    },
    {
      class: 'triangle',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
