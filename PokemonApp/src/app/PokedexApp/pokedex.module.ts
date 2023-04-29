import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { HeaderComponent } from './shared/header/header.component';
import { PokemonFiltersComponent } from './components/pokemon-filters/pokemon-filters.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { NgOptimizedImage } from '@angular/common';
import { PokemonLoaderComponent } from './components/pokemon-loader/pokemon-loader.component';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';
import { HeightWeightPipe } from './pipes/height-weight.pipe';
import { DefaultpokemonImagePipe } from './pipes/defaultpokemon-image.pipe';
import { PokemonInputComponent } from './components/pokemon-input/pokemon-input.component';

@NgModule({
  declarations: [
    HeaderComponent,
    PokemonFiltersComponent,
    HomePageComponent,
    PokemonCardComponent,
    PokemonLoaderComponent,
    PokemonViewComponent,
    HeightWeightPipe,
    DefaultpokemonImagePipe,
    PokemonInputComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    CarouselModule,
    NgOptimizedImage,
    FormsModule
  ],
  exports:[
    HeaderComponent,
    PokemonFiltersComponent,
    HomePageComponent,
    PokemonCardComponent,
    PokemonLoaderComponent,
    PokemonInputComponent
  ]
})
export class PokedexModule { }
