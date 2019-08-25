import { TestBed } from '@angular/core/testing';

import { DepartmentDetailsService } from './department-details.service';

describe('DepartmentDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DepartmentDetailsService = TestBed.get(DepartmentDetailsService);
    expect(service).toBeTruthy();
  });
});
