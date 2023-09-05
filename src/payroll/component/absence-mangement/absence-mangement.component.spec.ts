import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenceMangementComponent } from './absence-mangement.component';

describe('AbsenceMangementComponent', () => {
  let component: AbsenceMangementComponent;
  let fixture: ComponentFixture<AbsenceMangementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsenceMangementComponent]
    });
    fixture = TestBed.createComponent(AbsenceMangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
