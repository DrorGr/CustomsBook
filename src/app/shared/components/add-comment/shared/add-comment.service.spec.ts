import { TestBed } from '@angular/core/testing';

import { AddCommentService } from './services.service';

describe('ServicesService', () => {
  let service: AddCommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddCommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
