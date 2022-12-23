import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'app-boton-certificados',
  templateUrl: './boton-certificados.component.html',
  styleUrls: ['./boton-certificados.component.css']
})
export class BotonCertificadosComponent implements OnInit {

  constructor(private servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

  Mostrar(){
    this.servicio.Ejecutar2.emit();
  }

}
