import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSoluComponent } from './details-solu.component';

describe('DetailsSoluComponent', () => {
  let component: DetailsSoluComponent;
  let fixture: ComponentFixture<DetailsSoluComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsSoluComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSoluComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
