import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports:[HttpClientModule]
    });
    service = TestBed.inject(ServiceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  
});
