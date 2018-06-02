import { Component, Input, EventEmitter, Output } from '@angular/core';

export interface ParkingSpace {
  readonly id: string;
  status: string;
}

@Component({
  selector: 'mcn-parking-space',
  templateUrl: './parking-space.component.html',
  styleUrls: ['./parking-space.component.scss']
})
export class ParkingSpaceComponent {

  private _selected = false;

  @Input() id: string;
  @Input() status = 'open';

  @Output() select = new EventEmitter<boolean>();

  get isCharging(): boolean {
    return this.status === 'charging';
  }

  get isOccupied(): boolean {
    return this.status === 'occupied';
  }

  get isOpen(): boolean {
    return this.status === 'open';
  }

  get selected(): boolean {
    return this._selected;
  }

  set selected(selected: boolean) {
    if (selected === this._selected) {
      return;
    }
    this._selected = selected;
    this.select.emit(this._selected);
  }

  click(event: MouseEvent) {
    event.preventDefault();
    this.selected = !this.selected;
  }

}
