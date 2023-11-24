import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyPieComponent } from './dy-pie.component';

describe('DyPieComponent', () => {
  let component: DyPieComponent;
  let fixture: ComponentFixture<DyPieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyPieComponent]
    });
    fixture = TestBed.createComponent(DyPieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
