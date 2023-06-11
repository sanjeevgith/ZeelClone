import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndroidnavpopupComponent } from './androidnavpopup.component';

describe('AndroidnavpopupComponent', () => {
  let component: AndroidnavpopupComponent;
  let fixture: ComponentFixture<AndroidnavpopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AndroidnavpopupComponent]
    });
    fixture = TestBed.createComponent(AndroidnavpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
