import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit {
  public hours: number[] = [];

  public ngOnInit(): void {
    for (let i = 1; i <= 12; i++) {
      this.hours.push(i);
    }
  }
}
