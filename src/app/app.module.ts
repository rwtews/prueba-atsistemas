import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { CustomTranslateModule } from './shared/modules/custom-translate/custom-translate.module';

const StandaloneComponents = [
  HeaderComponent
]

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomTranslateModule,
    StandaloneComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
