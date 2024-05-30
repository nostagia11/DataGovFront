import { TestBed } from '@angular/core/testing';

import { SoftwareSoluServiceService } from './software-solu-service.service';

describe('SoftwareSoluServiceService', () => {
  let service: SoftwareSoluServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SoftwareSoluServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
