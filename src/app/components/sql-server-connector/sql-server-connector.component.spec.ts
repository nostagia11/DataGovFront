import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlServerConnectorComponent } from './sql-server-connector.component';

describe('SqlServerConnectorComponent', () => {
  let component: SqlServerConnectorComponent;
  let fixture: ComponentFixture<SqlServerConnectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SqlServerConnectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SqlServerConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
