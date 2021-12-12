import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flashlight',
  templateUrl: './flashlight.component.html',
  styleUrls: ['./flashlight.component.scss']
})
export class FlashlightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const position = document.documentElement;
    position.addEventListener('mousemove', e => {
      position.style.setProperty('--x', e.clientX + 'px');
      position.style.setProperty('--y', e.clientY + 'px');
    });
  }
}
