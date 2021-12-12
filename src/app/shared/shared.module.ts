import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssetsPipe } from './pipes/assets.pipe';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { TogglerComponent } from './components/toggler/toggler.component';

@NgModule({
  declarations: [
    AssetsPipe,
    MenuComponent,
    TogglerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AssetsPipe,
    MenuComponent,
    TogglerComponent,
  ],
})
export class SharedModule {
}
