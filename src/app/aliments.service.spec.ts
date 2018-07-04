import { TestBed, inject } from '@angular/core/testing';

import { AlimentsService } from './aliments.service';

describe('AlimentsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlimentsService]
    });
  });

  it('should be created', inject([AlimentsService], (service: AlimentsService) => {
    expect(service).toBeTruthy();
  }));
});
