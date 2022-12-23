import { ComponentFixture, TestBed, } from '@angular/core/testing';

import { BotonCertificadosComponent } from './boton-certificados.component';
import { DesplazamientoService} from '../../desplazamiento.service';

describe('BotonCertificadosComponent', () => {
  let component: BotonCertificadosComponent;
  let fixture: ComponentFixture<BotonCertificadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonCertificadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonCertificadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
