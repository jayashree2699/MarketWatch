import { TestBed } from '@angular/core/testing';

import { MiscellaneousService } from './miscellaneous.service';

describe('MiscellaneousService', () => {
  let service: MiscellaneousService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiscellaneousService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
