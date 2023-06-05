import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductscategorywiseComponent } from './productscategorywise.component';

describe('ProductscategorywiseComponent', () => {
  let component: ProductscategorywiseComponent;
  let fixture: ComponentFixture<ProductscategorywiseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductscategorywiseComponent]
    });
    fixture = TestBed.createComponent(ProductscategorywiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
