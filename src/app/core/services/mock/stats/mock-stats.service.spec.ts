import { TestBed } from '@angular/core/testing';

import { MockStatsService } from './mock-stats.service';

describe('MockStatsService', () => {
  let service: MockStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
