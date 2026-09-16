import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityReactiveForm } from './quantity-reactive-form';

describe('QuantityReactiveForm', () => {
  let component: QuantityReactiveForm;
  let fixture: ComponentFixture<QuantityReactiveForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityReactiveForm],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityReactiveForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
