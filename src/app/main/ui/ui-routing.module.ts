import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiContainer } from './containers/ui/ui.container';

const routes: Routes = [
  {
    path: '',
    component: UiContainer,
    data: { title: 'UI' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
