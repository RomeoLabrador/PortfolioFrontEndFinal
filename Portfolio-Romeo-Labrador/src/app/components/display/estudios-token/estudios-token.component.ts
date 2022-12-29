import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { TokenService } from 'src/app/service/token.service';
import { DesplazamientoService } from '../../desplazamiento.service';

@Component({
  selector: 'app-estudios-token',
  templateUrl: './estudios-token.component.html',
  styleUrls: ['./estudios-token.component.css']
})
export class EstudiosTokenComponent implements OnInit {

  estudios:Estudios[] = [];

  constructor(protected servicio:DesplazamientoService,private estudiosS:EstudiosService, private tokenService:TokenService) { }

  isLogged = false;

  
  ngOnInit(): void {
    this.cargarEstudios();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarEstudios():void{
    this.estudiosS.lista().subscribe(
      data =>{
        this.estudios = data;
      }
    )
  }

  borrar(id?:number){
    if(id != undefined){
      this.estudiosS.delete(id).subscribe(
        data =>{
          this.cargarEstudios();
        }, err => {
          alert("no se pudo eliminar el estudio");
        }
      )
    }
  }

  

}
