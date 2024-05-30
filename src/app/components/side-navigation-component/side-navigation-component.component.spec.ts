import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavigationComponentComponent } from './side-navigation-component.component';

describe('SideNavigationComponentComponent', () => {
  let component: SideNavigationComponentComponent;
  let fixture: ComponentFixture<SideNavigationComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavigationComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideNavigationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
