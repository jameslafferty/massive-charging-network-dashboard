import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadoutComponent } from './readout.component';

describe('ReadoutComponent', () => {
  let component: ReadoutComponent;
  let fixture: ComponentFixture<ReadoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
