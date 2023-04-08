import { Component } from '@angular/core';
import { PokemonFilters } from '../../interfaces/pokemon-filters';

@Component({
  selector: 'app-pokemon-filters',
  templateUrl: './pokemon-filters.component.html',
  styleUrls: ['./pokemon-filters.component.scss']
})
export class PokemonFiltersComponent {

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

}