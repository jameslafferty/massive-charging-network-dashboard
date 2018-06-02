import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatCardModule, MatCheckboxModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ReadoutComponent } from './readout/readout.component';
import { MapComponent } from './map/map.component';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';
import { ParkingRowComponent } from './parking-row/parking-row.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadoutComponent,
    MapComponent,
    ParkingSpaceComponent,
    ParkingRowComponent
  ],
  imports: [
    BrowserModule,

    MatCardModule,
    MatCheckboxModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
