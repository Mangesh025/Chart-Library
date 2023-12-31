import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { IchartDataset } from 'src/app/model/charts';
Chart.register(...registerables);

@Component({
  selector: 'dy-pie',
  templateUrl: './dy-pie.component.html',
  styleUrls: ['./dy-pie.component.scss']
})
export class DyPieComponent implements OnInit, AfterViewInit {

  @Input() labels !: Array<string>;
  @Input() datasets !: Array<IchartDataset>;


  @ViewChild('piechart') piechart!: ElementRef<HTMLCanvasElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.createPieChart()
  }

  private createPieChart(): Chart<any> {
    return new Chart(this.piechart.nativeElement, {
      // type :- pie, bar, line, radar, bubble, polarArea
      type: 'pie',
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





