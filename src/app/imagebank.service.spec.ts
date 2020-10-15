import { TestBed } from '@angular/core/testing';

import { ImagebankService } from './imagebank.service';

describe('ImagebankService', () => {
  let service: ImagebankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagebankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
