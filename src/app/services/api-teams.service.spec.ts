import { TestBed } from '@angular/core/testing';

import { ApiTeamsService } from './api-teams.service';

describe('ApiTeamsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiTeamsService = TestBed.get(ApiTeamsService);
    expect(service).toBeTruthy();
  });
});
