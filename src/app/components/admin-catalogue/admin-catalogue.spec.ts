import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatalogue } from './admin-catalogue';

describe('AdminCatalogue', () => {
  let component: AdminCatalogue;
  let fixture: ComponentFixture<AdminCatalogue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminCatalogue],
    }).compileComponents();

    fixture = TestBed.createComponent(AdminCatalogue);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
