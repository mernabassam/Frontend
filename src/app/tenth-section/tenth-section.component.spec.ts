import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthSectionComponent } from './tenth-section.component';

describe('TenthSectionComponent', () => {
  let component: TenthSectionComponent;
  let fixture: ComponentFixture<TenthSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TenthSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
