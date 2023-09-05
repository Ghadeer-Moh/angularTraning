import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOSReportComponent } from './eos-report.component';

describe('EOSReportComponent', () => {
  let component: EOSReportComponent;
  let fixture: ComponentFixture<EOSReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EOSReportComponent]
    });
    fixture = TestBed.createComponent(EOSReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
