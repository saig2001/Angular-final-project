import { TestBed } from '@angular/core/testing';

import { OptionserviceService } from './optionservice.service';

describe('OptionserviceService', () => {
  let service: OptionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
