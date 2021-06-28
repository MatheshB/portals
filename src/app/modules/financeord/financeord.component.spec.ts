import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceordComponent } from './financeord.component';

describe('FinanceordComponent', () => {
  let component: FinanceordComponent;
  let fixture: ComponentFixture<FinanceordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
