import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EOSCalculationComponent } from './eos-calculation.component';

describe('EOSCalculationComponent', () => {
  let component: EOSCalculationComponent;
  let fixture: ComponentFixture<EOSCalculationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EOSCalculationComponent]
    });
    fixture = TestBed.createComponent(EOSCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
