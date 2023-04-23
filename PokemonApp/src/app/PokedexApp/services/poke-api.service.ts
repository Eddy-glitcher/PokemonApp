import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../interfaces/pokemon-data';
import { PokemonList } from '../interfaces/pokemon-list';
import { PokemonType } from '../interfaces/pokemon-type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

baseUrl = environment.baseUrl;
pokemonInitialList : PokemonData[] = [];
currentTypePokemon : string = '';
activeFilterClass : string = '';
currentPositionFilter : number = 0;

// To get pokemons by id  from pokeapi
getPokemonById(id: number): Observable<PokemonData>{
  const url = `${this.baseUrl}/pokemon/${id}`;
  return this.http.get<PokemonData>(url);
}

// To get pokemons by name from pokeapi
getPokemonByName(name: string): Observable<PokemonData>{
  const url = `${this.baseUrl}/pokemon/${name}`;
  return this.http.get<PokemonData>(url);
}

// To get pokemons by Url from pokeapi
getPokemonByUrl(url: string): Observable<PokemonData>{
  return this.http.get<PokemonData>(url);
}

// To get the 20s firt pokemons from pokeapi
getInitialPokemons(): void{
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
}

// To return the pokemonInitialList to orhers components
get initialPokemons(): PokemonData[]{
  // To sorted the received pokemons list by id
  return this.pokemonInitialList.sort((a, b) => {
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

// To get pokemons from pokeapi by type
getPokemonsByType(type: string): void{
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
}

constructor(private http : HttpClient) {
  this.getInitialPokemons();
}

}
