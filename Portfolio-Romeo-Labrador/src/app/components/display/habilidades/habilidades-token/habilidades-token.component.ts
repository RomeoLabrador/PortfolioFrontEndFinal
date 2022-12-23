import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/service/s-habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades-token',
  templateUrl: './habilidades-token.component.html',
  styleUrls: ['./habilidades-token.component.css']
})
export class HabilidadesTokenComponent implements OnInit {


  habildad:Habilidad[] = [];



  constructor(protected servicio:DesplazamientoService,private sHabilidad:SHabilidadService,private tokenService:TokenService) { }

  isLogged=false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.sHabilidad.lista().subscribe(data => {this.habildad = data;})
  }

  Delete(id?:number){
    if(id != undefined){
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        },err => {
          alert("No se pudo borrar la experiencia");
        }
      )
    }
  }

}
