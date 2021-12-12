import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { TikTakToeComponent } from './components/tik-tak-toe/tik-tak-toe.component';
import { GamesRoutingModule } from './games-routing.module';
import { GamesContainer } from './containers/games/games.container';
import { SudokuComponent } from './components/sudoku/sudoku.component';
import { FindTheSameComponent } from './components/find-the-same/find-the-same.component';
import { BubblesComponent } from './components/bubbles/bubbles.component';
import { SnakeComponent } from './components/snake/snake.component';

@NgModule({
  declarations: [
    TikTakToeComponent,
    GamesContainer,
    SudokuComponent,
    FindTheSameComponent,
    BubblesComponent,
    SnakeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    GamesRoutingModule,
  ],
})
export class GamesModule {
}
