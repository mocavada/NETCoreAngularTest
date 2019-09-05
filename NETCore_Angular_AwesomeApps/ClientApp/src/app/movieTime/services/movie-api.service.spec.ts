/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MovieApiService } from './movie-api.service';

describe('Service: MovieApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieApiService]
    });
  });

  it('should ...', inject([MovieApiService], (service: MovieApiService) => {
    expect(service).toBeTruthy();
  }));
});
