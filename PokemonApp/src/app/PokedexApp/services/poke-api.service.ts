import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { PokemonData } from '../interfaces/pokemon-data';
import { PokemonList } from '../interfaces/pokemon-list';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

baseUrl = environment.baseUrl;
pokemonInitialList : PokemonData[] = [];

constructor(private http : HttpClient) {
}

getPokemonByUrl(url: string) {
  return this.http.get<PokemonData>(url);
}

getInitialPokemons(){
  const url :string = `${this.baseUrl}/pokemon/`

  this.http.get<PokemonList>(url).subscribe( (resp) =>{
    this.pokemonInitialList = [];
      resp.results.forEach((pokemon) => {
        this.getPokemonByUrl(pokemon.url).subscribe((resp) => {
          this.pokemonInitialList.push(resp);
        });
      });
    })
}

get initialPokemons(): PokemonData[] {
  this.sortedPokemonList(this.pokemonInitialList);
  return this.pokemonInitialList;
}

sortedPokemonList(arr: PokemonData[]){
  arr.sort((a, b) => {
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

}
