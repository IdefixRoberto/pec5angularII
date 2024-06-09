/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentListService } from './component-list.service';

describe('Service: ComponentList', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentListService]
    });
  });

  it('should ...', inject([ComponentListService], (service: ComponentListService) => {
    expect(service).toBeTruthy();
  }));
});
