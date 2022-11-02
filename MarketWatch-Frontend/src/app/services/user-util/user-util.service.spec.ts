import { TestBed } from '@angular/core/testing';

import { UserUtilService } from './user-util.service';

describe('UserUtilService', () => {
  let service: UserUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
