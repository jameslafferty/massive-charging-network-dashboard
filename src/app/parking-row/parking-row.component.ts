import { Component, Input, ViewChildren, EventEmitter, Output } from '@angular/core';

import { ParkingSpace, ParkingSpaceComponent } from '../parking-space/parking-space.component';

@Component({
  selector: 'mcn-parking-row',
  templateUrl: './parking-row.component.html',
  styleUrls: ['./parking-row.component.scss']
})
export class ParkingRowComponent {

  private _selectedSpaces = <string[]>[];

  @Input() spaces = <ParkingSpace[]>[];

  @Output() selectedSpaces = new EventEmitter<string[]>();

  @ViewChildren(ParkingSpaceComponent) parkingSpaceViewChildList;

  spaceSelected(value: boolean, id: string): void {
    const indexOfSelectedId = this._selectedSpaces.indexOf(id);
    if (value) {
      if ( indexOfSelectedId === -1) {
        this._selectedSpaces.push(id);
        this.selectedSpaces.emit(this._selectedSpaces);
      }
      return;
    }
    if (indexOfSelectedId === -1) {
      return;
    }
    this._selectedSpaces.splice(indexOfSelectedId, 1);
    this.selectedSpaces.emit(this._selectedSpaces);
  }

  toggleSelection(value: boolean): void {
    this.parkingSpaceViewChildList.forEach(space => space.selected = value);
  }
}
