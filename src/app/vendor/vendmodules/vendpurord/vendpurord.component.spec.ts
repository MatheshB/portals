import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendpurordComponent } from './vendpurord.component';

describe('VendpurordComponent', () => {
  let component: VendpurordComponent;
  let fixture: ComponentFixture<VendpurordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendpurordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendpurordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
