import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWithSignalComponent } from './user-with-signal.component';

describe('UserWithSignalComponent', () => {
  let component: UserWithSignalComponent;
  let fixture: ComponentFixture<UserWithSignalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserWithSignalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserWithSignalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
