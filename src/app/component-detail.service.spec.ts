/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentDetailService } from './component-detail.service';

describe('Service: ComponentDetail', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentDetailService]
    });
  });

  it('should ...', inject([ComponentDetailService], (service: ComponentDetailService) => {
    expect(service).toBeTruthy();
  }));
});
