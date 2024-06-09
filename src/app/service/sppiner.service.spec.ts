/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SppinerService } from './sppiner.service';

describe('Service: Sppiner', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SppinerService]
    });
  });

  it('should ...', inject([SppinerService], (service: SppinerService) => {
    expect(service).toBeTruthy();
  }));
});
