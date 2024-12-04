import { TestBed } from '@angular/core/testing';

import { ArmazenamentoLocalService } from './armazenamento-local.service';

describe('ArmazenamentoLocalService', () => {
  let service: ArmazenamentoLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmazenamentoLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
