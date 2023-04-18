import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonData } from '../../interfaces/pokemon-data';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit {
  pokemon: PokemonData[] = [];

  constructor( private pokeService: PokeApiService, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
    switchMap( ({id}) => this.pokeService.getPokeomnById(Number(id)))
    ).subscribe(pokemon => {
      console.log(pokemon);
        this.pokemon = [];
        this.pokemon.push(pokemon);
    });
  }
}
