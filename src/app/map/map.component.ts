import { Component, OnInit, HostListener, ViewChildren, Input } from '@angular/core';

import { ParkingSpace } from '../ParkingSpace';
import { MatCheckboxChange } from '@angular/material';
import { ParkingRowComponent } from '../parking-row/parking-row.component';
import { ParkingSpaceService } from '../parking-space.service';

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

  @Input() id = '1';

  @ViewChildren(ParkingRowComponent) parkingRowViewChildList;

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
      console.log(selectRect);
    }
  }

  @HostListener('document:mouseup', [ '$event' ]) mouseup = (event: MouseEvent): void => {
    this.selecting = false;
  }

  constructor(private parkingSpaceService: ParkingSpaceService) {}

  selectAllChange(event: MatCheckboxChange): void {
    this.parkingRowViewChildList.forEach(row => row.toggleSelection(event.checked));
  }

  selectedSpaces(ids: string[]) {
    this.parkingSpaceService.setSelectedSpaces(this.id, ids);
  }

  ngOnInit(): void {
    this.parkingSpaceService.get(this.id).subscribe(r => {
      this.name = r.name;
      this.spaces = r.spaces;
    });
  }

}
