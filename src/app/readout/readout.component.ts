import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mcn-readout',
  templateUrl: './readout.component.html',
  styleUrls: ['./readout.component.css']
})
export class ReadoutComponent implements OnInit {

  kwh: number;
  spotsCharging: number;
  spotsOccupiedNotCharging: number;
  spotsOpen: number;

  ngOnInit(): void {
    this.kwh = 150;
    this.spotsCharging = 50;
    this.spotsOccupiedNotCharging = 10;
    this.spotsOpen = 20;
  }

}
