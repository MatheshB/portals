import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpsidebarComponent } from './empsidebar.component';

describe('EmpsidebarComponent', () => {
  let component: EmpsidebarComponent;
  let fixture: ComponentFixture<EmpsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
