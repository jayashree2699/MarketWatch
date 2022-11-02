import { TestBed } from '@angular/core/testing';

import { StockExplorerService } from './stock-explorer.service';

describe('StockExplorerService', () => {
  let service: StockExplorerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockExplorerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
