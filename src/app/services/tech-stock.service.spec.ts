import { TestBed } from '@angular/core/testing';

import { TechStockService } from './tech-stock.service';

describe('TechStockService', () => {
  let service: TechStockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechStockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
