import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';

@Component({
  selector: 'app-certificados-token',
  templateUrl: './certificados-token.component.html',
  styleUrls: ['./certificados-token.component.css']
})
export class CertificadosTokenComponent implements OnInit {

  guardar(){}

  eliminar(){}

  constructor(protected servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

}
