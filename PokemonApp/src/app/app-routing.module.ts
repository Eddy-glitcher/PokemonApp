import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'Pokedex', loadChildren: ()=> import('./PokedexApp/pokedex.module').then(m => m.PokedexModule)},
  {path: '**', redirectTo: 'Pokedex'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
