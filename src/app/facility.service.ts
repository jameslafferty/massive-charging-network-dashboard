import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { Facility } from './Facility';
import { ParkingSpace } from './ParkingSpace';

const facilities = [{
  id: '1',
  name: 'My Facility',
}, {
  id: '2',
  name: 'Your Facility',
}];

@Injectable({
  providedIn: 'root'
})
export class FacilityService {

  private selectedSpaces = <Subject<ParkingSpace[]>[]>[];

  $selectedSpaces = of(this.selectedSpaces);

  get(): Observable<Facility[]> {
    return of(facilities);
  }
}
