import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgScrollbarModule } from 'ngx-scrollbar';

import { HeaderComponent } from './shared/layout/header/header.component';
import { LateralMenuComponent } from './shared/layout/lateral-menu/lateral-menu.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

import { AppComponent } from './app.component';
import { CustomTranslateModule } from './shared/modules/custom-translate/custom-translate.module';

const StandaloneComponents = [
  HeaderComponent,
  LateralMenuComponent,
  SpinnerComponent
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgScrollbarModule,
    CustomTranslateModule,
    StandaloneComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
