import { TestBed } from '@angular/core/testing';

import { DetectExcelChangesService } from './detect-excel-changes.service';

describe('DetectExcelChangesService', () => {
  let service: DetectExcelChangesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetectExcelChangesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
