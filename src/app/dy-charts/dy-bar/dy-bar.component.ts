import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'dy-bar',
  templateUrl: './dy-bar.component.html',
  styleUrls: ['./dy-bar.component.scss']
})
export class DyBarComponent implements OnInit {
  @Input() labels!: any[];
  @Input() datasets!: any[];

  public myChart: Chart | undefined;
  @ViewChild('barChart') barChart!: ElementRef;

  constructor() {}

  ngOnChanges() {
    this.getStackedChart();
  }

  ngOnInit(): void {
    this.getStackedChart();
  }

  getStackedChart() {
    const canvas: any = this.barChart.nativeElement;
    const ctx = canvas.getContext("2d");
    var data = {
      labels: ['Label1', 'Label2', 'Label3'],

      datasets: [
        {
          label: "Utilised Limit",
          data: [10,20,30],
          backgroundColor: "#22aa99"
        },
        {
          label: "Available Limit",
          data: [30,20,10],
          backgroundColor: "#994499"
        }
      ]
    };

    this.myChart = new Chart(ctx, { type: "bar", data: data });
  }

}
