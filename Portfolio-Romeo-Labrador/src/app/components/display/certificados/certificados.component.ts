import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from '../../desplazamiento.service';
import { DisplayComponent } from '../display.component';

@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.component.html',
  styleUrls: ['./certificados.component.css']
})
export class CertificadosComponent implements OnInit {

  constructor(private DisplayComponent:DisplayComponent,protected servicio:DesplazamientoService) { }

  ngOnInit(): void {
  }

  lista3:number[] = this.DisplayComponent.lista3

}
