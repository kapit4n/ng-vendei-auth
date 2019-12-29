import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserProfileComponent } from './auth-user-profile.component';

describe('AuthUserProfileComponent', () => {
  let component: AuthUserProfileComponent;
  let fixture: ComponentFixture<AuthUserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
