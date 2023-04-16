import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { PokemonFiltersComponent } from './components/pokemon-filters/pokemon-filters.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { NgOptimizedImage } from '@angular/common';
import { PokemonLoaderComponent } from './components/pokemon-loader/pokemon-loader.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokemonFiltersComponent,
    HomePageComponent,
    PokemonCardComponent,
    PokemonLoaderComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    CarouselModule,
    NgOptimizedImage
  ],
  exports:[
    HeaderComponent,
    PokemonFiltersComponent,
    HomePageComponent,
    PokemonCardComponent,
    PokemonLoaderComponent
  ]
})
export class PokedexModule { }
