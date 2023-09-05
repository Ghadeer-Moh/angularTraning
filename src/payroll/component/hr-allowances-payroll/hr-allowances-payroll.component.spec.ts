import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrAllowancesPayrollComponent } from './hr-allowances-payroll.component';

describe('HrAllowancesPayrollComponent', () => {
  let component: HrAllowancesPayrollComponent;
  let fixture: ComponentFixture<HrAllowancesPayrollComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrAllowancesPayrollComponent]
    });
    fixture = TestBed.createComponent(HrAllowancesPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
