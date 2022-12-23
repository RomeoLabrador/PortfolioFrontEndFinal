import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'app-estudios-token',
  templateUrl: './estudios-token.component.html',
  styleUrls: ['./estudios-token.component.css']
})
export class EstudiosTokenComponent implements OnInit {


  constructor(protected servicio:DesplazamientoService) { }

  eliminar(){
    this.servicio.Borrar.emit();
  }

  guardar(){
    
  }

  ngOnInit(): void {

    this.servicio.LoginSuccess.subscribe(data => {
      this.servicio.show = 1;
    })



  }

  descripcion:string = 'Descripcion del Estudio'

}
