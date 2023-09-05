import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CallInOnComponent } from './call-in-on.component';

describe('CallInOnComponent', () => {
  let component: CallInOnComponent;
  let fixture: ComponentFixture<CallInOnComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CallInOnComponent]
    });
    fixture = TestBed.createComponent(CallInOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
