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

  $selectedSpaces = <Observable<ParkingSpace[]>[]>[];

  constructor() {
    this.selectedSpaces = facilities.map(() => new Subject<ParkingSpace[]>());
    this.$selectedSpaces = this.selectedSpaces.map(s => s.asObservable());
  }

  get(): Observable<Facility[]> {
    return of(facilities);
  }

  setSelectedSpaces(facilityId: string, spaces: ParkingSpace[]): void {
    const index = facilities.indexOf(facilities.find(f => f.id === facilityId));
    this.selectedSpaces[index].next(spaces);
  }
}
