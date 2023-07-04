import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToCurrencySelectorComponent } from './to-currency-selector.component';

describe('ToCurrencySelectorComponent', () => {
  let component: ToCurrencySelectorComponent;
  let fixture: ComponentFixture<ToCurrencySelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToCurrencySelectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToCurrencySelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
