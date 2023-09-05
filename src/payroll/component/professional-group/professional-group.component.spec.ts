import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalGroupComponent } from './professional-group.component';

describe('ProfessionalGroupComponent', () => {
  let component: ProfessionalGroupComponent;
  let fixture: ComponentFixture<ProfessionalGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessionalGroupComponent]
    });
    fixture = TestBed.createComponent(ProfessionalGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
