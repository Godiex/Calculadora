import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyCalculatorComponent } from './body-calculator.component';

describe('BodyCalculatorComponent', () => {
  let component: BodyCalculatorComponent;
  let fixture: ComponentFixture<BodyCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
