import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsColumnComponent } from './details-column.component';

describe('DetailsColumnComponent', () => {
  let component: DetailsColumnComponent;
  let fixture: ComponentFixture<DetailsColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsColumnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
