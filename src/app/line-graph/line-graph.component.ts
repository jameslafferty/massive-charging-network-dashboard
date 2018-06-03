import { Component, OnInit, ElementRef, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import * as c3 from 'c3';
import { Observable } from 'rxjs';

import { ParkingSpace } from '../ParkingSpace';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'mcn-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  @Input() spaces: Observable<ParkingSpace[]>;

  constructor(private changeDetectorRef: ChangeDetectorRef, private elementRef: ElementRef) {}

  backward(e: Event): void {
    e.preventDefault();
  }

  forward(e: Event): void {
    e.preventDefault();
  }

  ngOnInit() {

    if (this.spaces) {
      let timeout;
      let chart;
      this.spaces.subscribe(spaces => {
        if (timeout) {
          clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
          if (!spaces.length) {
            if (chart) {
              chart.destroy();
            }
            return;
          }
          const timestamps = <any[]>['time'].concat(spaces[0].powerReadouts.map(r => r.timestamp));
          const values = spaces.map(s => <any[]>([s.id])
            .concat(<any[]>(s.powerReadouts.map(r => r.value))));
          const total = values.reduce((previousValue, currentValue) => {
            if (undefined === previousValue) {
              return [].concat(currentValue);
            }
            return currentValue.map((v, i) => v + previousValue[i]);
          });

          total[0] = 'Total';

          chart = c3.generate({
            axis: {
              x: {
                type: 'timeseries',
              },
            },
            bindto: this.elementRef.nativeElement.querySelector('svg'),
            data: {
              x: 'time',
              columns: [timestamps].concat([total]),
            },
            legend: {
              show: false,
            },
            padding: {
              top: 0,
              right: 24,
              bottom: 0,
              left: 24,
            }
          });
          chart.resize();
          this.changeDetectorRef.detectChanges();
          setTimeout(() => Array.from(this.elementRef.nativeElement.querySelectorAll('svg'))
            .forEach((svg: HTMLElement) => svg.style.overflow = 'visible'), 60);
        }, 60);
      });
    }
  }
}
