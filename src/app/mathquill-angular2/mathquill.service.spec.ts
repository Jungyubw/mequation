import { TestBed, inject } from '@angular/core/testing';

import { MathquillService } from './mathquill.service';

describe('MathquillService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathquillService]
    });
  });

  it('should be created', inject([MathquillService], (service: MathquillService) => {
    expect(service).toBeTruthy();
  }));
});
