import { Component } from '@angular/core';
import { PokemonFilters } from '../../interfaces/pokemon-filters';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-pokemon-filters',
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss'],
})
export class PokemonFiltersComponent {

  // Set the property for the toggle class
  activeFilterClass: string = this.pokeApiService.activeFilterClass;
  isFilterContentActive : boolean = false;

  // To show or hide the filters items
  toggleContent(){
    this.isFilterContentActive = !this.isFilterContentActive;
  }

  // To set the toggle class when the type is active
  activateFilterClass(type : string,index : number){
    this.activeFilterClass = type;
    this.pokeApiService.activeFilterClass = type;
    this.pokeApiService.currentPositionFilter = index;
  }

  // To get the pokemons list by type from service
  getPokemonsByType(type : string){
    this.pokeApiService.getPokemonsByType(type);
  }

  // Set the config for carousel
  customOptions: OwlOptions = {
    loop: false,
    startPosition: this.pokeApiService.currentPositionFilter,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    margin:30,
    navSpeed:300,
    navText: ['<i class="fa-solid fa-angle-left"></i>' , '<i class="fa-solid fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 2
      },
      240:{
        items: 3
      },
      300:{
        items: 3
      },
      400: {
        items: 5
      },
      740: {
        items: 7
      },
      940: {
        items: 10
      }
    },
    nav: true
  }

  // Set the data for filter items
  arrPokemonFilters : PokemonFilters[] = [
    {
      icon  : '../../../../assets/img/pokemon-types/fire.png',
      name  : 'Fuego',
      type  : 'fire',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/grass.png',
      name  : 'Hierba',
      type  : 'grass',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/water.png',
      name  : 'Agua',
      type  : 'water',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/lightning.png',
      name  : 'Electrico',
      type  : 'electric',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/rock.png',
      name  : 'Roca',
      type  : 'rock',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/ghost.png',
      name  : 'Fantasma',
      type  : 'ghost',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/poison.png',
      name  : 'Veneno',
      type  : 'poison',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/bug.png',
      name  : 'Insecto',
      type  : 'bug',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/ground.png',
      name  : 'Tierra',
      type  : 'ground',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/dragon.png',
      name  : 'Dragon',
      type  : 'dragon',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/psychic.png',
      name  : 'Psiquico',
      type  : 'psychic',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/steel.png',
      name  : 'Metal',
      type  : 'steel',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/flying.png',
      name  : 'Vuelo',
      type  : 'flying',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/fairy.png',
      name  : 'Hada',
      type  : 'fairy',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/fighting.png',
      name  : 'Pelea',
      type  : 'fighting',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/dark.png',
      name  : 'Ocuridad',
      type  : 'dark',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/ice.png',
      name  : 'Hielo',
      type  : 'ice',
    },
    {
      icon  : '../../../../assets/img/pokemon-types/normal.png',
      name  : 'Normal',
      type  : 'normal',
    },

  ]

  // Inject the poke-api service
  constructor(private pokeApiService : PokeApiService){}
}
