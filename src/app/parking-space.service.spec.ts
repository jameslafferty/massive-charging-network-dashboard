import { TestBed, inject } from '@angular/core/testing';

import { ParkingSpaceService } from './parking-space.service';

describe('ParkingSpaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParkingSpaceService]
    });
  });

  it('should be created', inject([ParkingSpaceService], (service: ParkingSpaceService) => {
    expect(service).toBeTruthy();
  }));
});
