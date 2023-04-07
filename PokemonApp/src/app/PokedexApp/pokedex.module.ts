import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HeaderComponent } from './shared/header/header.component';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class PokedexModule { }
