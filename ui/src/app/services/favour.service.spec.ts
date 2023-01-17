import { TestBed } from '@angular/core/testing';

import { FavourService } from './favour.service';

describe('FavourService', () => {
  let service: FavourService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavourService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
