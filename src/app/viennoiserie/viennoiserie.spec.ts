import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Viennoiserie } from './viennoiserie';

describe('Viennoiserie', () => {
  let component: Viennoiserie;
  let fixture: ComponentFixture<Viennoiserie>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viennoiserie],
    }).compileComponents();

    fixture = TestBed.createComponent(Viennoiserie);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
