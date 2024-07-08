import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportshopTshirtsComponent } from './sportshop-tshirts.component';

describe('SportshopTshirtsComponent', () => {
  let component: SportshopTshirtsComponent;
  let fixture: ComponentFixture<SportshopTshirtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SportshopTshirtsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SportshopTshirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
