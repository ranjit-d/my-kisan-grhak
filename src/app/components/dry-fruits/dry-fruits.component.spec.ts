import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DryFruitsComponent } from './dry-fruits.component';

describe('DryFruitsComponent', () => {
  let component: DryFruitsComponent;
  let fixture: ComponentFixture<DryFruitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DryFruitsComponent]
    });
    fixture = TestBed.createComponent(DryFruitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
