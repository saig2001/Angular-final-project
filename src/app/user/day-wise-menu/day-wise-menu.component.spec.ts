import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayWiseMenuComponent } from './day-wise-menu.component';

describe('DayWiseMenuComponent', () => {
  let component: DayWiseMenuComponent;
  let fixture: ComponentFixture<DayWiseMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayWiseMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayWiseMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
