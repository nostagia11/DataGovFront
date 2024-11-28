import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRegleComponent } from './update-regle.component';

describe('UpdateRegleComponent', () => {
  let component: UpdateRegleComponent;
  let fixture: ComponentFixture<UpdateRegleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRegleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRegleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
