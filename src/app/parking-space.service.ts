import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { ParkingSpace } from './parking-space/parking-space.component';

interface ParkingSpaceResponse {
  readonly name: string;
  readonly spaces: ParkingSpace[][];
}

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
}];

@Injectable({
  providedIn: 'root'
})
export class ParkingSpaceService {

  get(id: string): Observable<ParkingSpaceResponse> {
    return of(responses.find(item => item.id === id));
  }

}
