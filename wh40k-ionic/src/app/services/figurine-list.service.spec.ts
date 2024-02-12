import { TestBed } from '@angular/core/testing';

import { FigurineListService } from './figurine-list.service';

describe('FigurineListService', () => {
  let service: FigurineListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FigurineListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
