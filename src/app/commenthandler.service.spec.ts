import { TestBed } from '@angular/core/testing';

import { CommenthandlerService } from './commenthandler.service';

describe('CommenthandlerService', () => {
  let service: CommenthandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommenthandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
