import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesContainer } from './containers/games/games.container';

const routes: Routes = [
  {
    path: '',
    component: GamesContainer,
    data: { title: 'Games' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
