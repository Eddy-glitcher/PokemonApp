import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styleUrls: ['./pokemon-input.component.scss']
})
export class PokemonInputComponent implements OnInit {

  @Input() selectedPokemon : string = '';
  debouncer: Subject<string> = new Subject();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onDisplayOptions: EventEmitter<boolean> = new EventEmitter();
  @Output() onSearchPokemon: EventEmitter<string> = new EventEmitter();

  // When the user press a key into the input send the value to charge the pokemon list
  keyPressed(){
    this.debouncer.next(this.selectedPokemon);
  }

  // To send a boolean when the input is focused
  displayPokemonOptions(state : boolean){
    this.onDisplayOptions.emit(state);
  }

  // Send the input value to search pokemon
  searchPokemon(pokemonName : string){
    this.onSearchPokemon.emit(pokemonName);
  }

  // Initialization the debouncer
  ngOnInit(){
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

}
