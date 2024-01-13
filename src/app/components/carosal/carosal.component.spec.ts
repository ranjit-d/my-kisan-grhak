import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosalComponent } from './carosal.component';

describe('CarosalComponent', () => {
  let component: CarosalComponent;
  let fixture: ComponentFixture<CarosalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarosalComponent]
    });
    fixture = TestBed.createComponent(CarosalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
