import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleaveDetComponent } from './empleave-det.component';

describe('EmpleaveDetComponent', () => {
  let component: EmpleaveDetComponent;
  let fixture: ComponentFixture<EmpleaveDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleaveDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleaveDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
