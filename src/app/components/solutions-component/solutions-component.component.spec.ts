import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsComponentComponent } from './solutions-component.component';

describe('SolutionsComponentComponent', () => {
  let component: SolutionsComponentComponent;
  let fixture: ComponentFixture<SolutionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
