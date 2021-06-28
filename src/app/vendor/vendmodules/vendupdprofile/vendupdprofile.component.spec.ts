import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendupdprofileComponent } from './vendupdprofile.component';

describe('VendupdprofileComponent', () => {
  let component: VendupdprofileComponent;
  let fixture: ComponentFixture<VendupdprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendupdprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendupdprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
