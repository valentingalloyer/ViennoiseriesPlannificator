import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViennoiserieDetails } from './viennoiserie-details';

describe('ViennoiserieDetails', () => {
  let component: ViennoiserieDetails;
  let fixture: ComponentFixture<ViennoiserieDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViennoiserieDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ViennoiserieDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
