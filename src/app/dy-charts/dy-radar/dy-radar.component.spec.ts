import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyRadarComponent } from './dy-radar.component';

describe('DyRadarComponent', () => {
  let component: DyRadarComponent;
  let fixture: ComponentFixture<DyRadarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyRadarComponent]
    });
    fixture = TestBed.createComponent(DyRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
