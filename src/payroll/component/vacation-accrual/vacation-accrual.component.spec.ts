import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacationAccrualComponent } from './vacation-accrual.component';

describe('VacationAccrualComponent', () => {
  let component: VacationAccrualComponent;
  let fixture: ComponentFixture<VacationAccrualComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VacationAccrualComponent]
    });
    fixture = TestBed.createComponent(VacationAccrualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
