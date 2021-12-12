import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MochDataService {
  public menuItems: { id: number, label: string}[] = [
    {
      id: 0,
      label: 'Item 1',
    },
    {
      id: 1,
      label: 'Item 2',
    },
    {
      id: 2,
      label: 'Item 3',
    },
    {
      id: 3,
      label: 'Item 4',
    },
    {
      id: 4,
      label: 'Item 5',
    },
  ];

}
