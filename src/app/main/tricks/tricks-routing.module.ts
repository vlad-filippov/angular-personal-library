import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TricksContainer } from './containers/tricks/tricks.container';

const routes: Routes = [
  {
    path: '',
    component: TricksContainer,
    data: { title: 'Tricks' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TricksRoutingModule { }
