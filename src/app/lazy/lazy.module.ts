import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaaComponent } from './aaaa/aaaa.component';
import { BbbbComponent } from './bbbb/bbbb.component';

import {RutasModule} from './rutas.module';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    RutasModule
  ],
  declarations: [AaaaComponent, BbbbComponent,MenuComponent]
})
export class LazyModule { }
