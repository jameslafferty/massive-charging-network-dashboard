import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ReadoutComponent } from './readout/readout.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadoutComponent
  ],
  imports: [
    BrowserModule,

    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
