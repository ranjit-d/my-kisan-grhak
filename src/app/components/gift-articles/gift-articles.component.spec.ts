import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftArticlesComponent } from './gift-articles.component';

describe('GiftArticlesComponent', () => {
  let component: GiftArticlesComponent;
  let fixture: ComponentFixture<GiftArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GiftArticlesComponent]
    });
    fixture = TestBed.createComponent(GiftArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
