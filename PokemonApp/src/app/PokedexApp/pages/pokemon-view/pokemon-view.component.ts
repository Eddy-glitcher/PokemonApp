import { AfterViewChecked, Component, ElementRef, OnInit, QueryList, Renderer2, ViewChildren } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { PokemonData } from '../../interfaces/pokemon-data';

@Component({
  selector: 'app-pokemon-view',
  templateUrl: './pokemon-view.component.html',
  styleUrls: ['./pokemon-view.component.scss']
})
export class PokemonViewComponent implements OnInit, AfterViewChecked {

  // To set the pokemon object
  pokemon: PokemonData[] = [];

  // To get the html alias list
  @ViewChildren('stat') statElements!: QueryList<ElementRef<HTMLElement>>;

  constructor( private pokeService: PokeApiService, private activatedRoute: ActivatedRoute, private renderer2 : Renderer2){}

  ngOnInit(): void {
    // To get the pokemon by Id from pokeapi service, using the url params
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.pokeService.getPokeomnById(Number(id)))
      ).subscribe(pokemon => {
        this.pokemon = [];
        this.pokemon.push(pokemon);
      });
  }

  ngAfterViewChecked(): void {

    // To set the width for the html progress-bars whit renderer2
    const setWidth= (statIndex:number, width:number) =>{
      if (this.statElements && this.statElements.length > 0) {
        this.statElements.forEach((stat, index) => {
          if (index == statIndex) {
            this.renderer2.setStyle(stat.nativeElement, 'width', `${width}px`);
          }
        })
      }
    }

    // To loop through a pokemon stats and generate the progress-bars styles
    if (this.pokemon.length > 0) {
      this.pokemon[0].stats.forEach((stat,index)=>{
        setWidth(index,stat.base_stat);
      });
    }
  }
}
