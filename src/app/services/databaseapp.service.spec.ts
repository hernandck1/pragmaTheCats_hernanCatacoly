import { TestBed } from '@angular/core/testing';

import { DatabaseappService } from './databaseapp.service';

describe('DatabaseappService', () => {
  let service: DatabaseappService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabaseappService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
