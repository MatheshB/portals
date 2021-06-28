import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenddefaultComponent } from './venddefault.component';

describe('VenddefaultComponent', () => {
  let component: VenddefaultComponent;
  let fixture: ComponentFixture<VenddefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VenddefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VenddefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
