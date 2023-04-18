import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PokemonViewComponent } from './pages/pokemon-view/pokemon-view.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'home',
        component: HomePageComponent
      },
      {
        path: 'pokemon/:id',
        component: PokemonViewComponent
      },
      {
        path:'**',
        redirectTo: 'home'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
