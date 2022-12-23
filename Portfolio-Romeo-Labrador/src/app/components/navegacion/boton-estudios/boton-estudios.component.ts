import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'app-boton-estudios',
  templateUrl: './boton-estudios.component.html',
  styleUrls: ['./boton-estudios.component.css']
})
export class BotonEstudiosComponent implements OnInit {

  

  constructor(private servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

  Mostrar(){
    this.servicio.Ejecutar0.emit();
  }

}
