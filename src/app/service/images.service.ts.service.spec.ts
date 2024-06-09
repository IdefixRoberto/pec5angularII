/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Images.service.tsService } from './images.service.ts.service';

describe('Service: Images.service.ts', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Images.service.tsService]
    });
  });

  it('should ...', inject([Images.service.tsService], (service: Images.service.tsService) => {
    expect(service).toBeTruthy();
  }));
});
