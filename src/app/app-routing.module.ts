import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', loadChildren: () => import('./pages/list-of-characters/list-of-characters.module').then(m => m.ListOfCharactersModule) },
  { path: 'characters/:id', loadChildren: () => import('./pages/character-detail/character-detail.module').then(m => m.CharacterDetailModule) },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule { }