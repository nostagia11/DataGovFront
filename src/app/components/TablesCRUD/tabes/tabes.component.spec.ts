import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabesComponent } from './tabes.component';

describe('TabesComponent', () => {
  let component: TabesComponent;
  let fixture: ComponentFixture<TabesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
