import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmppayrepComponent } from './emppayrep.component';

describe('EmppayrepComponent', () => {
  let component: EmppayrepComponent;
  let fixture: ComponentFixture<EmppayrepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmppayrepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmppayrepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
