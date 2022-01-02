import { TestBed } from '@angular/core/testing';

import { DepartementGuard } from './departement.guard';

describe('DepartementGuard', () => {
  let guard: DepartementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DepartementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
