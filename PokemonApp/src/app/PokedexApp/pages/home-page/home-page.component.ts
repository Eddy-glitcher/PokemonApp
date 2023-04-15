import { Component } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  get initialPokemons(){
    return this.pokeApiService.initialPokemons;
  }

  constructor(private pokeApiService : PokeApiService){
    this.pokeApiService.getInitialPokemons();
  }
}
