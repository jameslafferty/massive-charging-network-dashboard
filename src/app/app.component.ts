import { Component, OnInit } from '@angular/core';

import { FacilityService } from './facility.service';
import { Facility } from './Facility';

@Component({
  selector: 'mcn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  facilities = <Facility[]>[];

  constructor(private facilityService: FacilityService) {}

  ngOnInit(): void {
    this.facilityService.get().subscribe(f => {
      this.facilities = f;
    });
  }
}
