import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpPayslipDetComponent } from './emp-payslip-det.component';

describe('EmpPayslipDetComponent', () => {
  let component: EmpPayslipDetComponent;
  let fixture: ComponentFixture<EmpPayslipDetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpPayslipDetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpPayslipDetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
