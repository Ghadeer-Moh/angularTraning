import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WpsComponent } from './wps.component';

describe('WpsComponent', () => {
  let component: WpsComponent;
  let fixture: ComponentFixture<WpsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WpsComponent]
    });
    fixture = TestBed.createComponent(WpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
