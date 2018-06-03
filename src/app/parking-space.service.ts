import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { SelectedSpaces } from './SelectedSpaces';
import { ParkingSpaceResponse } from './ParkingSpaceResponse';
import { ParkingSpace } from './ParkingSpace';

const responses = [{
  id: '1',
  name: 'My Facility',
  spaces: [
    [{
      id: '1',
      status: 'charging',
    }, {
      id: '2',
      status: 'occupied',
    }, {
      id: '3',
      status: 'open',
    }],
    [{
      id: '5',
      status: 'charging',
    }, {
      id: '6',
      status: 'occupied',
    }, {
      id: '7',
      status: 'open',
    }, {
      id: '8',
      status: 'occupied',
    }, {
      id: '9',
      status: 'open',
    }],
    [{
      id: '10',
      status: 'charging',
    }, {
      id: '11',
      status: 'occupied',
    }, {
      id: '12',
      status: 'open',
    }],
  ]
}, {
  id: '2',
  name: 'Your Facility',
  spaces: [
    [{
      id: '1',
      status: 'charging',
    }, {
      id: '2',
      status: 'charging',
    }, {
      id: '3',
      status: 'charging',
    }, {
      id: '4',
      status: 'charging',
    }, {
      id: '5',
      status: 'charging',
    }],
    [{
      id: '6',
      status: 'charging',
    }, {
      id: '7',
      status: 'occupied',
    }, {
      id: '8',
      status: 'open',
    }, {
      id: '9',
      status: 'occupied',
    }, {
      id: '10',
      status: 'open',
    }],
    [{
      id: '11',
      status: 'charging',
    }, {
      id: '12',
      status: 'occupied',
    }, {
      id: '13',
      status: 'open',
    }],
  ]
}];

@Injectable({
  providedIn: 'root'
})
export class ParkingSpaceService {

  private selectedSpaces = new Subject<ParkingSpace[]>();

  $selectedSpaces = of(this.selectedSpaces);

  get(facilityId: string): Observable<ParkingSpaceResponse> {
    return of(responses.find(item => item.id === facilityId));
  }

  setSelectedSpaces(facilityId: string, spaceIds: string[]) {
    // this.selectedSpaces[facilityId] = spaceIds;
    // this.selectedSpaces.next();
  }

}
