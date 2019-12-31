import { TestBed } from '@angular/core/testing';

import { ALoginService } from './a-login.service';

describe('ALoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ALoginService = TestBed.get(ALoginService);
    expect(service).toBeTruthy();
  });
});
