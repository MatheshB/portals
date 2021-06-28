import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendheaderComponent } from './vendheader.component';

describe('VendheaderComponent', () => {
  let component: VendheaderComponent;
  let fixture: ComponentFixture<VendheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
