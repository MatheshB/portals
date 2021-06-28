import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveReqComponent } from './empleave-req.component';

describe('EmpleaveReqComponent', () => {
  let component: EmpleaveReqComponent;
  let fixture: ComponentFixture<EmpleaveReqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleaveReqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleaveReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
