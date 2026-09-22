import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViennoiserieLike } from './viennoiserie-like';

describe('ViennoiserieLike', () => {
  let component: ViennoiserieLike;
  let fixture: ComponentFixture<ViennoiserieLike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViennoiserieLike],
    }).compileComponents();

    fixture = TestBed.createComponent(ViennoiserieLike);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
