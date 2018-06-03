import { Component, OnInit, Input } from '@angular/core';

import { FacilityService } from '../facility.service';
import { ParkingSpace } from '../ParkingSpace';
import { Subject } from 'rxjs';

@Component({
  selector: 'mcn-readout',
  templateUrl: './readout.component.html',
  styleUrls: ['./readout.component.scss']
})
export class ReadoutComponent implements OnInit {

  private spaces = new Subject<ParkingSpace[]>();

  @Input() facilityId: string;
  @Input() facilityIndex: number; // This should go away

  kwh: number;
  spacesCharging: number;
  spacesOccupiedNotCharging: number;
  spacesOpen: number;

  $spaces = this.spaces.asObservable();

  get totalSpaces(): number {
    return this.spacesCharging + this.spacesOccupiedNotCharging + this.spacesOpen;
  }
  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.kwh = 150;
    this.facilityService.$selectedSpaces[this.facilityIndex].subscribe((spaces) => {
      this.spacesCharging = spaces.filter(r => r.status === 'charging').length;
      this.spacesOccupiedNotCharging = spaces.filter(r => r.status === 'occupied').length;
      this.spacesOpen = spaces.filter(r => r.status === 'open').length;
      this.spaces.next(spaces);
    });
  }

}
