import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpdefaultComponent } from './empdefault.component';

describe('EmpdefaultComponent', () => {
  let component: EmpdefaultComponent;
  let fixture: ComponentFixture<EmpdefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpdefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpdefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
