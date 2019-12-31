import { TestBed } from '@angular/core/testing';

import { AConfigService } from './a-config.service';

describe('AConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AConfigService = TestBed.get(AConfigService);
    expect(service).toBeTruthy();
  });
});
