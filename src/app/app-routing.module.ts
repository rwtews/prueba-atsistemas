import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '404', loadComponent: () => import('./pages/not-found/not-found.component').then(mod => mod.NotFoundComponent) },
  { path: 'characters', loadChildren: () => import('./pages/list-of-characters/list-of-characters.module').then(m => m.ListOfCharactersModule) },
  { path: 'characters/:id', loadChildren: () => import('./pages/character-detail/character-detail.module').then(m => m.CharacterDetailModule) },
  { path: 'episodes', loadChildren: () => import('./pages/episodes/episodes.module').then(m => m.EpisodesModule) },
  { path: 'deaths', loadChildren: () => import('./pages/deaths/deaths.module').then(m => m.DeathsModule) },
  { path: '**', redirectTo: '/404', pathMatch: 'full' },
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