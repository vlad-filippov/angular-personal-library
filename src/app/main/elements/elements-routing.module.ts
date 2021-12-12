import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElementsContainer } from './containers/items/elements.container';

const routes: Routes = [
  {
    path: '',
    component: ElementsContainer,
    data: { title: 'Tricks' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
