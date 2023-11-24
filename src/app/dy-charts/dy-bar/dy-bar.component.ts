import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'dy-bar',
  templateUrl: './dy-bar.component.html',
  styleUrls: ['./dy-bar.component.scss']
})
export class DyBarComponent implements OnInit , AfterViewInit{
  @Input() labels!: string[];
  @Input() datasets!: number[];

  @ViewChild('barChart') barChart!: ElementRef;

  constructor() {}


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
      // this.CreateBarChar()
  }
  private CreateBarChar(): Chart {
    return new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
          labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'] || this.labels,
          datasets: [{
              label: '# of Votes',
              data: [12, 19, 14, 7, 4, 8] || this.datasets,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          },
        ]
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
