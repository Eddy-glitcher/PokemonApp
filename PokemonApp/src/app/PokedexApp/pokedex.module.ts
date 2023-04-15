import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { PokemonFiltersComponent } from './components/pokemon-filters/pokemon-filters.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PokemonFiltersComponent,
    HomePageComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    CarouselModule
  ],
  exports:[
    HeaderComponent,
    PokemonFiltersComponent,
    HomePageComponent,
    PokemonCardComponent
  ]
})
export class PokedexModule { }
