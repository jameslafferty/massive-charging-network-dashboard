import { Component, OnInit, ElementRef, Input } from '@angular/core';
import * as c3 from 'c3';

@Component({
  selector: 'mcn-line-graph',
  templateUrl: './line-graph.component.html',
  styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {

  @Input() spaces = [{
    id: '1',
    powerReadouts: [{
      timestamp: '2018-03-01',
      value: 100,
    }, {
      timestamp: '2018-04-01',
      value: 120,
    }, {
      timestamp: '2018-05-01',
      value: 90,
    }, {
      timestamp: '2018-06-01',
      value: 45,
    }],
  }, {
    id: '2',
    powerReadouts: [{
      timestamp: '2018-03-01',
      value: 20,
    }, {
      timestamp: '2018-04-01',
      value: 30,
    }, {
      timestamp: '2018-05-01',
      value: 90,
    }, {
      timestamp: '2018-06-01',
      value: 5,
    }],
  }, {
    id: '3',
    powerReadouts: [{
      timestamp: '2018-03-01',
      value: 65,
    }, {
      timestamp: '2018-04-01',
      value: 48,
    }, {
      timestamp: '2018-05-01',
      value: 90,
    }, {
      timestamp: '2018-06-01',
      value: 3,
    }],
  }];

  constructor(private elementRef: ElementRef) {}

  backward(e: Event): void {
    e.preventDefault();
  }

  forward(e: Event): void {
    e.preventDefault();
  }

  ngOnInit() {
    const chart = c3.generate({
      axis: {
        x: {
          type: 'timeseries',
        },
      },
      bindto: this.elementRef.nativeElement.querySelector('svg'),
      data: {
        x: 'time',
        columns: [
          ['time'],
        ],
      },
      legend: {
      },
      padding: {
        top: 0,
        right: 24,
        bottom: 0,
        left: 24,
      },
    });
    setTimeout(() => {
     const timestamps = <any[]>['time'].concat(this.spaces[0].powerReadouts.map(r => r.timestamp));
     const values = this.spaces.map(s => <any[]>([s.id]).concat(
       <any[]>(s.powerReadouts.map(r => r.value))));
      chart.load({
        columns: [timestamps].concat(values)
      });
    }, 2000);
  }
}
