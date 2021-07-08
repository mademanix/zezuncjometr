import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ZezuncjometrModule} from "../zezuncjometr/zezuncjometr.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ZezuncjometrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
