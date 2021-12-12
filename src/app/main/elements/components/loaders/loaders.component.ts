import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements OnInit {
  public aroundElements: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 20; i++) {
      this.aroundElements.push(i);
    }
  }

}
