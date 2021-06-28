import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendcreDebComponent } from './vendcre-deb.component';

describe('VendcreDebComponent', () => {
  let component: VendcreDebComponent;
  let fixture: ComponentFixture<VendcreDebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendcreDebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendcreDebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
