import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListOfCharactersRoutingModule } from './list-of-characters-routing.module';
import { ListOfCharactersComponent } from './list-of-characters.component';
import { CharacterItemComponent } from './components/character-item/character-item.component';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    ListOfCharactersComponent,
    CharacterItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    ListOfCharactersRoutingModule
  ]
})
export class ListOfCharactersModule { }
