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

// To get pokemons by id  from pokeapi
getPokeomnById(id: number){
  const url = `${this.baseUrl}/pokemon/${id}`;
  return this.http.get<PokemonData>(url);
}

// To get pokemons by name from pokeapi
getPokeomnByName(name: string){
  const url = `${this.baseUrl}/pokemon/${name}`;
  return this.http.get<any>(url);
}

// To get pokemons by Url from pokeapi
getPokemonByUrl(url: string) {
  return this.http.get<PokemonData>(url);
}

// To get the 20s firt pokemons from pokeapi
getInitialPokemons(){
  const url :string = `${this.baseUrl}/pokemon/`;
  this.currentTypePokemon = 'Pokemones Variados';  // To set the currentTypePokemon property whit the received type

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

// To sorted the received pokemons list by id
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

// To return the pokemonInitialList to orhers components
get initialPokemons(): PokemonData[] {
  return this.pokemonInitialList;
}

// To get pokemons from pokeapi by type
getPokemonsByType(type: string) {
  const url: string = `${this.baseUrl}/type/${type}/`;
  this.currentTypePokemon = `Pokemones de tipo ${type}`;  // To set the currentTypePokemon property whit the received type

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
