import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { PokemonFiltersComponent } from './components/pokemon-filters/pokemon-filters.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PokemonFiltersComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ],
  exports:[
    HeaderComponent,
    PokemonFiltersComponent
  ]
})
export class PokedexModule { }
