import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpupdprofileComponent } from './empupdprofile.component';

describe('EmpupdprofileComponent', () => {
  let component: EmpupdprofileComponent;
  let fixture: ComponentFixture<EmpupdprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpupdprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpupdprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
