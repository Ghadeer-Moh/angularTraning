import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousingAdvanceComponent } from './housing-advance.component';

describe('HousingAdvanceComponent', () => {
  let component: HousingAdvanceComponent;
  let fixture: ComponentFixture<HousingAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HousingAdvanceComponent]
    });
    fixture = TestBed.createComponent(HousingAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
