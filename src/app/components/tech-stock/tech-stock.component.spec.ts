import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechStockComponent } from './tech-stock.component';

describe('TechStockComponent', () => {
  let component: TechStockComponent;
  let fixture: ComponentFixture<TechStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechStockComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
