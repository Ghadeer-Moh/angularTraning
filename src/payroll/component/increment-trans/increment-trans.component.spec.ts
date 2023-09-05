import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementTransComponent } from './increment-trans.component';

describe('IncrementTransComponent', () => {
  let component: IncrementTransComponent;
  let fixture: ComponentFixture<IncrementTransComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementTransComponent]
    });
    fixture = TestBed.createComponent(IncrementTransComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
