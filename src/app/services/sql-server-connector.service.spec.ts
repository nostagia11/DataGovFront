import { TestBed } from '@angular/core/testing';

import { SqlServerConnectorService } from './sql-server-connector.service';

describe('SqlServerConnectorService', () => {
  let service: SqlServerConnectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqlServerConnectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
