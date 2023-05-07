import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelvethSectionComponent } from './twelveth-section.component';

describe('TwelvethSectionComponent', () => {
  let component: TwelvethSectionComponent;
  let fixture: ComponentFixture<TwelvethSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwelvethSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwelvethSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
