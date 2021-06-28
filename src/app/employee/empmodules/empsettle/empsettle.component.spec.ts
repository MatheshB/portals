import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsettleComponent } from './empsettle.component';

describe('EmpsettleComponent', () => {
  let component: EmpsettleComponent;
  let fixture: ComponentFixture<EmpsettleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsettleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsettleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
