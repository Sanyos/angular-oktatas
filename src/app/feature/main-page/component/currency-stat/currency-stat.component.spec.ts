import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyStatComponent } from './currency-stat.component';

describe('CurrencyStatComponent', () => {
  let component: CurrencyStatComponent;
  let fixture: ComponentFixture<CurrencyStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyStatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
