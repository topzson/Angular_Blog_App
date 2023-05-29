import { TestBed } from '@angular/core/testing';

import { CategoiesService } from './categoies.service';

describe('CategoiesService', () => {
  let service: CategoiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
