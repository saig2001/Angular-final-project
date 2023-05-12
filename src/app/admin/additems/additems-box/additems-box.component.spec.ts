import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditemsBoxComponent } from './additems-box.component';

describe('AdditemsBoxComponent', () => {
  let component: AdditemsBoxComponent;
  let fixture: ComponentFixture<AdditemsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditemsBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdditemsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
