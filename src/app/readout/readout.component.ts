import { Component, OnInit, Input } from '@angular/core';

import { ParkingSpaceService } from '../parking-space.service';

@Component({
  selector: 'mcn-readout',
  templateUrl: './readout.component.html',
  styleUrls: ['./readout.component.scss']
})
export class ReadoutComponent implements OnInit {

  @Input() facilityId: string;

  kwh: number;
  spotsCharging: number;
  spotsOccupiedNotCharging: number;
  spotsOpen: number;

  constructor(private parkingSpaceService: ParkingSpaceService) {}

  ngOnInit(): void {
    this.kwh = 150;
    this.spotsCharging = 50;
    this.spotsOccupiedNotCharging = 10;
    this.spotsOpen = 20;
    this.parkingSpaceService.$selectedSpaces.subscribe(() => {
    });
  }

}
