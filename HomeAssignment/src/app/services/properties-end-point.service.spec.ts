import { TestBed } from '@angular/core/testing';

import { PropertiesEndPointService } from './properties-end-point.service';

describe('PropertiesEndPointService', () => {
  let service: PropertiesEndPointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PropertiesEndPointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
