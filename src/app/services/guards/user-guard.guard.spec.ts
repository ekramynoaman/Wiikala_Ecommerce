import { TestBed } from '@angular/core/testing';

import { UserGuard } from './user-guard.guard';

describe('UserGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserGuard = TestBed.get(UserGuard);
    expect(service).toBeTruthy();
  });
});
