import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementConfigComponent } from './increment-config.component';

describe('IncrementConfigComponent', () => {
  let component: IncrementConfigComponent;
  let fixture: ComponentFixture<IncrementConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementConfigComponent]
    });
    fixture = TestBed.createComponent(IncrementConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
