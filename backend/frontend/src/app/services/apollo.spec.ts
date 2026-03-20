import { TestBed } from '@angular/core/testing';

import { Apollo } from './apollo';

describe('Apollo', () => {
  let service: Apollo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apollo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
