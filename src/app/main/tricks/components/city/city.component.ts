import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  public aroundElements: number[] = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.aroundElements.push(i);
    }
  }

}
