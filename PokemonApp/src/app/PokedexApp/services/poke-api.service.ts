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
    this.getInitialPokemons();
  }

  getInitialPokemons(){
    const url :string = `${this.baseUrl}/pokemon/`

    this.http.get<PokemonList>(url).subscribe( (resp) =>{
      console.log(resp);
    })
  }


}
