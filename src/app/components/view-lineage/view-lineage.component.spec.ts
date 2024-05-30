import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLineageComponent } from './view-lineage.component';

describe('ViewLineageComponent', () => {
  let component: ViewLineageComponent;
  let fixture: ComponentFixture<ViewLineageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLineageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewLineageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
