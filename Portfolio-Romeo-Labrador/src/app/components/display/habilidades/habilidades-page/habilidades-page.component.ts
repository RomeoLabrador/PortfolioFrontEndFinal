import { Component, OnInit,Input,Output } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';
import { DisplayComponent } from '../../display.component';

@Component({
  selector: 'app-habilidades-page',
  templateUrl: './habilidades-page.component.html',
  styleUrls: ['./habilidades-page.component.css']
})
export class HabilidadesPageComponent implements OnInit {

  constructor(private Displaycomponent:DisplayComponent,protected servicio:DesplazamientoService) { }

 

  ngOnInit(): void {
    
  }

  lista2:number [] = this.Displaycomponent.lista2;
}
