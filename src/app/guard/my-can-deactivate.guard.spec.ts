import { TestBed } from '@angular/core/testing';

import { MyCanDeactivateGuard } from './my-can-deactivate.guard';

describe('MyCanDeactivateGuard', () => {
  let guard: MyCanDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyCanDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
