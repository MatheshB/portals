import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendsidebarComponent } from './vendsidebar.component';

describe('VendsidebarComponent', () => {
  let component: VendsidebarComponent;
  let fixture: ComponentFixture<VendsidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendsidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
