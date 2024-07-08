import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportshopContactComponent } from './sportshop-contact.component';

describe('SportshopContactComponent', () => {
  let component: SportshopContactComponent;
  let fixture: ComponentFixture<SportshopContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportshopContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportshopContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
