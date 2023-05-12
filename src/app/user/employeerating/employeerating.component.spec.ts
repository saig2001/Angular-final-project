import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeratingComponent } from './employeerating.component';

describe('EmployeeratingComponent', () => {
  let component: EmployeeratingComponent;
  let fixture: ComponentFixture<EmployeeratingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeratingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeratingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
