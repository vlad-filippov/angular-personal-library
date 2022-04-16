import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    data: { title: 'aweZZome' },
  },
  {
    path: 'elements',
    loadChildren: () =>
      import('./main/elements/elements.module').then(
        (m) => m.ElementsModule,
      ),
  },
  {
    path: 'tricks',
    loadChildren: () =>
      import('./main/tricks/tricks.module').then(
        (m) => m.TricksModule,
      ),
  },
  {
    path: 'ui',
    loadChildren: () =>
      import('./main/ui/ui.module').then(
        (m) => m.UiModule,
      ),
  },
  {
    path: 'games',
    loadChildren: () =>
      import('./main/games/games.module').then(
        (m) => m.GamesModule,
      ),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
