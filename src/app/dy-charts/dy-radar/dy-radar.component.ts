import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { IchartDataset } from 'src/app/model/charts';

@Component({
  selector: 'dy-radar',
  templateUrl: './dy-radar.component.html',
  styleUrls: ['./dy-radar.component.scss']
})
export class DyRadarComponent {

  @Input() labels !: Array<string>;
  @Input() datasets !: Array<IchartDataset>;


  @ViewChild('radarchart') radarchart!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createPieChart()
  }

  private createPieChart(): Chart<any> {
    return new Chart(this.radarchart.nativeElement, {
      // type :- pie, bar, line, radar, bubble, polarArea
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: this.datasets
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    })
  }

}
