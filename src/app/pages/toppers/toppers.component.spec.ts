import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppersComponent } from './toppers.component';

describe('ToppersComponent', () => {
  let component: ToppersComponent;
  let fixture: ComponentFixture<ToppersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToppersComponent]
    });
    fixture = TestBed.createComponent(ToppersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
