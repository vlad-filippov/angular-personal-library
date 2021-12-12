import { Component } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.container.html',
  styleUrls: ['./ui.container.scss']
})
export class UiContainer {
  public versionId: number = 1;
  public menuItems: { id: number, name: string }[] = [
    { id: 1, name: 'Admin 1' },
    { id: 2, name: 'Landing 2' },
  ];

  public changeVersionId(id: number): void {
    this.versionId = id;
  }
}
