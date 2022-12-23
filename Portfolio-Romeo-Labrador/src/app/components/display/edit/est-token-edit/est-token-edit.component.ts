import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';

@Component({
  selector: 'app-est-token-edit',
  templateUrl: './est-token-edit.component.html',
  styleUrls: ['./est-token-edit.component.css']
})
export class EstTokenEditComponent implements OnInit {

  constructor(protected servicio:DesplazamientoService) { }

  agregar(){
    this.servicio.Agregar.emit();
  }

  ngOnInit(): void {
  }

}
