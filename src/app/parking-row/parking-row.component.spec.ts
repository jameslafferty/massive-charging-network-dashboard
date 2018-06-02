import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingRowComponent } from './parking-row.component';

describe('ParkingRowComponent', () => {
  let component: ParkingRowComponent;
  let fixture: ComponentFixture<ParkingRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParkingRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
