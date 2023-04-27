import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('value changes from false to true',fakeAsync(()=>{

    const button = fixture.nativeElement.querySelector('button');
    expect(component.responseRecieved).toBe(false);
    button.click();
    tick(6000);
    expect(component.responseRecieved).toBe(true);

  }));



});
