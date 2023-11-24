import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyLineComponent } from './dy-line.component';

describe('DyLineComponent', () => {
  let component: DyLineComponent;
  let fixture: ComponentFixture<DyLineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DyLineComponent]
    });
    fixture = TestBed.createComponent(DyLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
