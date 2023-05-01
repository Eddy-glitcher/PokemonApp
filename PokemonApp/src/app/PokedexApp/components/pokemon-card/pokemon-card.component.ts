import { Component, Input } from '@angular/core';
import { PokemonData } from '../../interfaces/pokemon-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: PokemonData;
  constructor(private router : Router){}

  goToPokemonView(pokemonName : string){
    this.router.navigate(['Pokedex/pokemon', pokemonName]);
  }

}
