import { TestBed, inject } from '@angular/core/testing';

import { NgComponentsVmejiaService } from './ng-components-vmejia.service';

describe('NgComponentsVmejiaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgComponentsVmejiaService]
    });
  });

  it('should be created', inject([NgComponentsVmejiaService], (service: NgComponentsVmejiaService) => {
    expect(service).toBeTruthy();
  }));
});
