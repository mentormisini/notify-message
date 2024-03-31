import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastrNotifyComponent } from './toastr-notify.component';

describe('ToastrNotifyComponent', () => {
  let component: ToastrNotifyComponent;
  let fixture: ComponentFixture<ToastrNotifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastrNotifyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToastrNotifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
