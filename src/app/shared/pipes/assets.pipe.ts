import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assets',
})
export class AssetsPipe implements PipeTransform {
  public transform(value: string): string {
    return `./assets/images/${value}`;
  }
}
