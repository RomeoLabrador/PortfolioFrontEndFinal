import { Component, OnInit,Input,Output } from '@angular/core';
import { DesplazamientoService } from '../desplazamiento.service';
import { EstudiosTokenComponent } from './estudios-token/estudios-token.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  
  lista1:number [] = [1,2,3];
  lista2:number[] = [1,2,3,4,5,6,7];
  lista3:number [] = [1,2,3,4,5,6]

  a:number = 0;
 

  constructor(protected servicio:DesplazamientoService) { }

  ngOnInit(): void {
    this.servicio.Ejecutar0.subscribe(data => {
      this.a = 0;
      console.log("Conexion exitosa");
    })

    this.servicio.Ejecutar1.subscribe(data =>{
      this.a = 1;
      console.log("conexion exitosa")
    })

    this.servicio.Ejecutar2.subscribe(data =>{
      this.a = 2;
      console.log("conexion exitosa")
    })

    this.servicio.LoginSuccess.subscribe(data => {
      this.servicio.show = 1;
    })
  }

}
