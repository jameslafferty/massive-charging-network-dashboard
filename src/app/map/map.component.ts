import { Component, OnInit, HostListener, ViewChildren, Input } from '@angular/core';
import { MatCheckboxChange } from '@angular/material';

import { ParkingSpace } from '../ParkingSpace';
import { ParkingRowComponent } from '../parking-row/parking-row.component';
import { ParkingSpaceService } from '../parking-space.service';
import { FacilityService } from '../facility.service';

interface MousePosition {
  readonly x: number;
  readonly y: number;
}

@Component({
  selector: 'mcn-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private selecting = false;
  private selectOrigin: MousePosition;


  name = '';
  spaces = <ParkingSpace[][]>[];
  checkstate = 'unchecked';

  @Input() id = '1';
  @Input() facilityIndex: number;

  @ViewChildren(ParkingRowComponent) parkingRowViewChildList;

  get isChecked () {
    return this.checkstate === 'checked';
  }

  get isIndeterminate () {
    return this.checkstate === 'indeterminate';
  }

  @HostListener('document:mousedown', [ '$event'] ) mousedown = (event: MouseEvent): void => {
    this.selecting = true;
    this.selectOrigin = {
      x: event.clientX,
      y: event.clientY,
    };
  }

  @HostListener('document:mousemove', [ '$event'] ) mousemove = (event: MouseEvent): void => {
    if (this.selecting) {
      const selectRect = new DOMRect(
        this.selectOrigin.x,
        this.selectOrigin.y,
        event.clientX - this.selectOrigin.x,
        event.clientY - this.selectOrigin.y );
        // #TODO: Implement drag mouse selection
    }
  }

  @HostListener('document:mouseup', [ '$event' ]) mouseup = (event: MouseEvent): void => {
    this.selecting = false;
  }

  constructor(private facilityService: FacilityService, private parkingSpaceService: ParkingSpaceService) {}

  selectAllChange(event: MatCheckboxChange): void {
    this.parkingRowViewChildList.forEach(row => row.toggleSelection(event.checked));
  }

  selectedSpaces(ids: string[], row: number) {
    this.parkingSpaceService.setSelectedSpaces(this.id, ids, row);
  }

  ngOnInit(): void {
    this.parkingSpaceService.get(this.id).subscribe(r => {
      this.name = r.name;
      this.spaces = r.spaces;
    });
    this.facilityService.$selectedSpaces[this.facilityIndex].subscribe(r => {
      if (r.length === 0) {
        this.checkstate = 'unchecked';
        return;
      }
      const spaces = this.spaces.reduce((previous, current) => previous.concat(current), []);
      if (spaces.length === r.length) {
        this.checkstate = 'checked';
        return;
      }
      this.checkstate = 'indeterminate';
    });
  }

}
