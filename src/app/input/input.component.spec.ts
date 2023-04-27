import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports:[FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('input componens name property update',()=>{

    const input = fixture.nativeElement.querySelector('input');
    const event = new Event('input');
    input.value = 'Sándor';
    input.dispatchEvent(event);
    //expect(component.name).toEqual('Sándor');
    const output = fixture.nativeElement.querySelector('#outputName');
    fixture.detectChanges();
    expect(output.textContent).toContain('Sándor');
  });

});
