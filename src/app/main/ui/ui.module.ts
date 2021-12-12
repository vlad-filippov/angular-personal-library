import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiContainer } from './containers/ui/ui.container';
import { UiRoutingModule } from './ui-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { Landing1Component } from './components/landing1/landing1.component';
import { Admin1Component } from './components/admin1/admin1.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    UiContainer,
    Landing1Component,
    Admin1Component,
  ],
  imports: [
    CommonModule,
    UiRoutingModule,
    SharedModule,
    NgChartsModule,
  ],
})
export class UiModule { }
