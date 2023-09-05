import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollRegisterComponent } from './payroll-register.component';

describe('PayrollRegisterComponent', () => {
  let component: PayrollRegisterComponent;
  let fixture: ComponentFixture<PayrollRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayrollRegisterComponent]
    });
    fixture = TestBed.createComponent(PayrollRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
