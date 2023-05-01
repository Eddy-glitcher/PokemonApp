import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';

@Component({
  selector: 'app-pokemon-input',
  templateUrl: './pokemon-input.component.html',
  styleUrls: ['./pokemon-input.component.scss']
})
export class PokemonInputComponent implements OnInit {

  @Input() selectedPokemon : string = '';
  @ViewChild('searchedValue') searchedValue!: ElementRef;
  debouncer: Subject<string> = new Subject();

  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onDisplayOptions: EventEmitter<boolean> = new EventEmitter();
  @Output() onSearchPokemon: EventEmitter<string> = new EventEmitter();

  // When the user press a key into the input send the value to charge the pokemon list
  keyPressed(): void{
    this.debouncer.next(this.selectedPokemon.toLowerCase());
  }

  // To send a boolean when the input is focused
  displayPokemonOptions(state : boolean){
    this.onDisplayOptions.emit(state);
  }

  // Send the input value to search pokemon
  searchPokemon(pokemonName : string): void{
    this.searchedValue.nativeElement.blur();
    this.onSearchPokemon.emit(pokemonName.toLowerCase());
  }

  // Initialization the debouncer
  ngOnInit(): void{
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.onDebounce.emit(value);
    });
  }

}
