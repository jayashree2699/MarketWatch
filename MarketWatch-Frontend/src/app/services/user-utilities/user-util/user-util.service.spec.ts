import { TestBed } from '@angular/core/testing';

import { UserUtilService } from './user-util.service';

describe('UserUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserUtilService = TestBed.get(UserUtilService);
    expect(service).toBeTruthy();
  });
});
