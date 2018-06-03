import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatGridListModule, MatCardModule, MatCheckboxModule, MatToolbarModule, MatButtonToggleModule } from '@angular/material';

import { AppComponent } from './app.component';
import { ReadoutComponent } from './readout/readout.component';
import { MapComponent } from './map/map.component';
import { ParkingSpaceComponent } from './parking-space/parking-space.component';
import { ParkingRowComponent } from './parking-row/parking-row.component';
import { LineGraphComponent } from './line-graph/line-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadoutComponent,
    MapComponent,
    ParkingSpaceComponent,
    ParkingRowComponent,
    LineGraphComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),

    MatCardModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
