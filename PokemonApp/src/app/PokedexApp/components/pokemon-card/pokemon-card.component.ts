import { Component, Input } from '@angular/core';
import { PokemonData } from '../../interfaces/pokemon-data';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: PokemonData;

}
