import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonAnimations } from '../shared/animations/common.animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [CommonAnimations.fadeIn],
})
export class MainComponent implements OnInit {
  public isPending: boolean = true;
  public showSelectedElement: string;
  public isAboutShowed: boolean;

  constructor(
    private router: Router,
  ) {
  }

  public ngOnInit(): void {
    setTimeout(() => {
      this.isPending = false;
    }, 2000);
  }

  public selectPath(route: string): void {
    this.isPending = true;
    this.showSelectedElement = route;

    setTimeout(() => {
      this.router.navigate([route]);
    }, 1000);
  }
}
