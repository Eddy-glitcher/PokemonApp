import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../interfaces/pokemon-data';
import { PokemonList } from '../interfaces/pokemon-list';
import { PokemonType } from '../interfaces/pokemon-type';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

baseUrl = environment.baseUrl;
pokemonInitialList : PokemonData[] = [];
currentTypePokemon : string = '';

getPokemonByUrl(url: string) {
  return this.http.get<PokemonData>(url);
}

getInitialPokemons(){
  const url :string = `${this.baseUrl}/pokemon/`;
  this.currentTypePokemon = 'Pokemones Variados';

    this.http.get<PokemonList>(url).subscribe( (pokemonList) =>{
      this.pokemonInitialList = [];
        pokemonList.results.forEach((pokemon) => {
          this.getPokemonByUrl(pokemon.url).subscribe((pokemon) => {
            this.pokemonInitialList.push(pokemon);
          });
        });
      });
      
  this.sortedPokemonList(this.pokemonInitialList);
}

sortedPokemonList(pokemonList: PokemonData[]){
  pokemonList.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
}

get initialPokemons(): PokemonData[] {
  return this.pokemonInitialList;
}

getPokemonsByType(type: string) {
  const url: string = `${this.baseUrl}/type/${type}/`;
  this.currentTypePokemon = `Pokemones de tipo ${type}`;

    this.http.get<PokemonType>(url).subscribe((PokemonType) => {
    this.pokemonInitialList = [];
      PokemonType.pokemon.forEach((pokemonsList) => {
        this.getPokemonByUrl(pokemonsList.pokemon.url).subscribe((pokemon) => {
          this.pokemonInitialList.push(pokemon);
        });
      });
    });

  this.sortedPokemonList(this.pokemonInitialList);
}

constructor(private http : HttpClient) {}

}
