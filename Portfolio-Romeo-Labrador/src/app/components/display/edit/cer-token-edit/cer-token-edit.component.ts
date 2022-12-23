import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';

@Component({
  selector: 'app-cer-token-edit',
  templateUrl: './cer-token-edit.component.html',
  styleUrls: ['./cer-token-edit.component.css']
})
export class CerTokenEditComponent implements OnInit {

  agregar(){}

  constructor(private servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

}
