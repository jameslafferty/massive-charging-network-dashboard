import { Injectable } from '@angular/core';
import { of, Observable, Subject } from 'rxjs';

import { ParkingSpaceResponse } from './ParkingSpaceResponse';
import { ParkingSpace } from './ParkingSpace';
import { FacilityService } from './facility.service';

const responses = [{
  id: '1',
  name: 'Google North Garage 1',
  spaces: [
    [{
      id: '1',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 65,
      }, {
        timestamp: '2018-04-01',
        value: 48,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 3,
      }],
    }, {
      id: '2',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '3',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 100,
      }, {
        timestamp: '2018-04-01',
        value: 120,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 45,
      }]
    }],
    [{
      id: '5',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '6',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '7',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '8',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '9',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }],
    [{
      id: '10',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '11',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '12',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }],
  ]
}, {
  id: '2',
  name: 'Google South Garage 3',
  spaces: [
    [{
      id: '1',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '2',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '3',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '4',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '5',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }],
    [{
      id: '6',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '7',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '8',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '9',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 20,
      }, {
        timestamp: '2018-04-01',
        value: 30,
      }, {
        timestamp: '2018-05-01',
        value: 90,
      }, {
        timestamp: '2018-06-01',
        value: 5,
      }],
    }, {
      id: '10',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 17,
      }, {
        timestamp: '2018-04-01',
        value: 69,
      }, {
        timestamp: '2018-05-01',
        value: 42,
      }, {
        timestamp: '2018-06-01',
        value: 15,
      }],
    }],
    [{
      id: '11',
      status: 'charging',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 40,
      }, {
        timestamp: '2018-04-01',
        value: 32,
      }, {
        timestamp: '2018-05-01',
        value: 9,
      }, {
        timestamp: '2018-06-01',
        value: 64,
      }],
    }, {
      id: '12',
      status: 'occupied',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 94,
      }, {
        timestamp: '2018-04-01',
        value: 47,
      }, {
        timestamp: '2018-05-01',
        value: 212,
      }, {
        timestamp: '2018-06-01',
        value: 35,
      }],
    }, {
      id: '13',
      status: 'open',
      powerReadouts: [{
        timestamp: '2018-03-01',
        value: 23,
      }, {
        timestamp: '2018-04-01',
        value: 14,
      }, {
        timestamp: '2018-05-01',
        value: 6,
      }, {
        timestamp: '2018-06-01',
        value: 7,
      }],
    }],
  ]
}];
@Injectable({
  providedIn: 'root'
})
export class ParkingSpaceService {

  private selectedSpaces = new Subject<ParkingSpace[]>();

  $selectedSpaces = of(this.selectedSpaces);

  constructor (private facilityService: FacilityService) {}

  get(facilityId: string): Observable<ParkingSpaceResponse> {
    return of(responses.find(item => item.id === facilityId));
  }

  setSelectedSpaces(facilityId: string, spaceIds: string[], row: number) {
    if (!this.selectedSpaces[facilityId]) {
      this.selectedSpaces[facilityId] = [];
    }
    this.selectedSpaces[facilityId][row] = spaceIds;
    const facility = responses.find(f => f.id === facilityId);
    const rows = facility.spaces.filter((r, index) => Array.isArray(this.selectedSpaces[facilityId][index]));
    const ids = this.selectedSpaces[facilityId].reduce((previous, current) => previous.concat(current), []);
    const spaces = rows.map(
      (r: ParkingSpace[]) => r.filter((space: ParkingSpace): boolean => ids.indexOf(space.id) > -1)
    ).reduce((previous, current) => previous.concat(current), []);
    this.facilityService.setSelectedSpaces(facilityId, spaces);
  }

}
