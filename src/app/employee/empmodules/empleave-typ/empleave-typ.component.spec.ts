import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveTypComponent } from './empleave-typ.component';

describe('EmpleaveTypComponent', () => {
  let component: EmpleaveTypComponent;
  let fixture: ComponentFixture<EmpleaveTypComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleaveTypComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleaveTypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
