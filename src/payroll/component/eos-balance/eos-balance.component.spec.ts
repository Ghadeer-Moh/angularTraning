import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EosBalanceComponent } from './eos-balance.component';

describe('EosBalanceComponent', () => {
  let component: EosBalanceComponent;
  let fixture: ComponentFixture<EosBalanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EosBalanceComponent]
    });
    fixture = TestBed.createComponent(EosBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
