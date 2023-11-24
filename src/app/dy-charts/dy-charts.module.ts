import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DyChartsRoutingModule } from './dy-charts-routing.module';
import { DyChartsComponent } from './dy-charts.component';
import { DyBarComponent } from './dy-bar/dy-bar.component';
import { DyLineComponent } from './dy-line/dy-line.component';
import { DyPieComponent } from './dy-pie/dy-pie.component';
import { DyRadarComponent } from './dy-radar/dy-radar.component';


@NgModule({
  declarations: [
    DyChartsComponent,
    DyBarComponent,
    DyLineComponent,
    DyPieComponent,
    DyRadarComponent
  ],
  imports: [
    CommonModule,
    DyChartsRoutingModule
  ],
  exports:[DyPieComponent]
})
export class DyChartsModule { }
