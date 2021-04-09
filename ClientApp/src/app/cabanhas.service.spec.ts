import { TestBed } from '@angular/core/testing';

import { CabanhasService } from './cabanhas.service';

describe('CabanhasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CabanhasService = TestBed.get(CabanhasService);
    expect(service).toBeTruthy();
  });
});
