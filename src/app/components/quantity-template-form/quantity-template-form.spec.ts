import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantityTemplateForm } from './quantity-template-form';

describe('QuantityTemplateForm', () => {
  let component: QuantityTemplateForm;
  let fixture: ComponentFixture<QuantityTemplateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuantityTemplateForm],
    }).compileComponents();

    fixture = TestBed.createComponent(QuantityTemplateForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
