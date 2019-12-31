import { TestBed } from '@angular/core/testing';

import { AUsersService } from './a-users.service';

describe('AUsersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AUsersService = TestBed.get(AUsersService);
    expect(service).toBeTruthy();
  });
});
