import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'app-boton-habilidades',
  templateUrl: './boton-habilidades.component.html',
  styleUrls: ['./boton-habilidades.component.css']
})
export class BotonHabilidadesComponent implements OnInit {

  constructor(private service:DesplazamientoService) { }

  ngOnInit(): void {
  }

  Mostrar(){
    this.service.Ejecutar1.emit();
  }

}
