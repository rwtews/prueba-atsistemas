import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'list', loadChildren: () => import('./pages/list-of-characters/list-of-characters.module').then(m => m.ListOfCharactersModule) }
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