import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonData } from '../../interfaces/pokemon-data';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  // To get the initialPpokemons list from poke-api service
  get initialPokemons(): PokemonData[]{
    return this.pokeApiService.initialPokemons;
  }

  // To get the pokemon-type property from service
  get getPokemonsType(): string{
    return this.pokeApiService.currentTypePokemon;
  }

  // Inject of the poke-api service
  constructor(private pokeApiService : PokeApiService){}
}
