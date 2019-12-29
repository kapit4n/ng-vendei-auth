import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserCreateComponent } from './auth-user-create.component';

describe('AuthUserCreateComponent', () => {
  let component: AuthUserCreateComponent;
  let fixture: ComponentFixture<AuthUserCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthUserCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
