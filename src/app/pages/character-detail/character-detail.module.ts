import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CharacterDetailRoutingModule } from './character-detail-routing.module';
import { CharacterDetailComponent } from './character-detail.component';


@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [
    CommonModule,
    TranslateModule,
    CharacterDetailRoutingModule
  ]
})
export class CharacterDetailModule { }
