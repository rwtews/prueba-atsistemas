import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeathsRoutingModule } from './deaths-routing.module';
import { DeathsComponent } from './deaths.component';
import { ComingSoonComponent } from 'src/app/shared/components/coming-soon/coming-soon.component';


@NgModule({
  declarations: [
    DeathsComponent
  ],
  imports: [
    CommonModule,
    DeathsRoutingModule,
    ComingSoonComponent
  ]
})
export class DeathsModule { }
