import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { PokemonData } from '../../interfaces/pokemon-data';
import { Result } from '../../interfaces/pokemon-list';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  pokemonList              : Result[] = [];
  suggestedPokemons        : Result[] = [];
  searchedPokemonList      : PokemonData[] = [];
  pokemonName              : string  = '';
  displaySuggestedOptions !: boolean;
  selectedPokemon          : string = '';

  // To get the initialPpokemons list from poke-api service
  get initialPokemons(): PokemonData[]{
    return this.pokeApiService.initialPokemons;
  }

  // To get the pokemon-type property from service
  get getPokemonsType(): string{
    return this.pokeApiService.currentTypePokemon;
  }

  // To set the pokemon list that make match whit the received value
  showSuggestedPokemons(pokemonName : string): void{
    this.pokemonName = pokemonName;
    this.suggestedPokemons = this.pokemonList.filter((pokemon)=>pokemon.name.includes(pokemonName));
  }

  // To search the pokemon by name
  searchPokemon(pokemonName : string) : void{

    // If the input is empty the default list of pokemons is charged
    if(pokemonName == '') return this.pokeApiService.getInitialPokemons();

    const pokemonSearched = this.suggestedPokemons.find((pokemon)=>{
      return pokemon.name === pokemonName;
    });

    if(pokemonSearched?.name){
      this.searchedPokemonList = [];
      this.pokeApiService.getPokemonByName(pokemonSearched!.name).subscribe((pokemon)=>{this.searchedPokemonList.push(pokemon)});
      this.pokeApiService.currentTypePokemon = `Buscaste el Pokemon: ${pokemonName}`;
      this.pokeApiService.pokemonInitialList = this.searchedPokemonList;
      this.displaySuggestedOptions = false;
    }else{

      if (this.showErrorMessage()) {
        return;
      }

      this.searchedPokemonList = [];
      this.suggestedPokemons.forEach((pokemon)=>{
        this.pokeApiService.getPokemonByName(pokemon.name).subscribe((pokemon)=>{
            if(pokemon.name != pokemonName)this.searchedPokemonList.push(pokemon);
          })
        });

        this.pokeApiService.currentTypePokemon = `Pokemones con la palabra: ${pokemonName}`;
        this.pokeApiService.pokemonInitialList = this.searchedPokemonList;
        this.displaySuggestedOptions = false;

    }
  }

  // To show the list of pokemons
  displayPokemonOptions(state : boolean){
    this.displaySuggestedOptions = state;
  }

  // To show the message error
  showErrorMessage(): boolean{
    return this.suggestedPokemons.length == 0 && this.pokemonName.length > 0;
  }

  // To set the SelectedPokemon propertie whit the selected pokemon in the suggested list
  setPokemonName(pokemonName : string): void{
    this.selectedPokemon = pokemonName;
    this.searchPokemon(pokemonName);
    this.displaySuggestedOptions = false;
  }

  // To manipulate de html click event
  @ViewChild('divElement') divElement!: ElementRef<HTMLElement>;
  @HostListener('document:click', ['$event.target'])
  // To hide the suggested pokemons list whe the user cliks outside the input
  onClick(targetElement : Node): void {
    const clickedInside = this.divElement.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.displaySuggestedOptions = false;
    }
  }

  // Inject of the poke-api service
  constructor(private pokeApiService : PokeApiService){}

    // To search and set the pokemon name list
    ngOnInit(): void {
      this.pokeApiService.getAllPokemonsNameList().subscribe((pokemons)=>{
        this.pokemonList  = pokemons.results;
      })
    }
}
