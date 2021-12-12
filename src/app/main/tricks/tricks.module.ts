import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TricksContainer } from './containers/tricks/tricks.container';
import { KrosovokCardComponent } from './components/krosovok-card/krosovok-card.component';
import { TricksRoutingModule } from './tricks-routing.module';
import { BeforeAfterComponent } from './components/before-after/before-after.component';
import { SharedModule } from '../../shared/shared.module';
import { SixBlocksComponent } from './components/six-blocks/six-blocks.component';
import { FlashlightComponent } from './components/flashlight/flashlight.component';
import { WeekendCirclesComponent } from './components/weekend-circles/weekend-circles.component';
import { ClockComponent } from './components/clock/clock.component';
import { IphoneDisasemblyComponent } from './components/iphone-disasembly/iphone-disasembly.component';
import { CityComponent } from './components/city/city.component';
import { CoinRotateComponent } from './components/coin-rotate/coin-rotate.component';

@NgModule({
  declarations: [
    TricksContainer,
    KrosovokCardComponent,
    BeforeAfterComponent,
    SixBlocksComponent,
    FlashlightComponent,
    WeekendCirclesComponent,
    ClockComponent,
    IphoneDisasemblyComponent,
    CityComponent,
    CoinRotateComponent,
  ],
  imports: [
    CommonModule,
    TricksRoutingModule,
    SharedModule,
  ],
})
export class TricksModule {
}
