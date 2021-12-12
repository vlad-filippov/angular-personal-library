import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsContainer } from './containers/items/elements.container';
import { LoadersComponent } from './components/loaders/loaders.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [ElementsContainer, LoadersComponent],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule,
  ],
})
export class ElementsModule { }
