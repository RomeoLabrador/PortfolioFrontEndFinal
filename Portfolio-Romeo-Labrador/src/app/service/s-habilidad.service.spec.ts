import { TestBed } from '@angular/core/testing';

import { SHabilidadService } from './s-habilidad.service';

describe('SHabilidadService', () => {
  let service: SHabilidadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SHabilidadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
