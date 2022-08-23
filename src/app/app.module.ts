import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomTranslateModule } from './shared/modules/custom-translate/custom-translate.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CustomTranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
