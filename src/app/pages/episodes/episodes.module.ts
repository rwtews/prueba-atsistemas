import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EpisodesRoutingModule } from './episodes-routing.module';
import { EpisodesComponent } from './episodes.component';
import { ComingSoonComponent } from 'src/app/shared/components/coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    EpisodesComponent
  ],
  imports: [
    CommonModule,
    EpisodesRoutingModule,
    ComingSoonComponent
  ]
})
export class EpisodesModule { }
