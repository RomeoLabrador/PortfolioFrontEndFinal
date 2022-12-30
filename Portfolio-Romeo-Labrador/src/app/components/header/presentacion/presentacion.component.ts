import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Presentacion } from 'src/app/model/presentacion';
import { PresentacionService } from 'src/app/service/presentacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  presentacion:Presentacion[] = [];

  isLogged=false;

  constructor(private tokenService:TokenService, private presentacionS:PresentacionService) { }

  ngOnInit(): void {
    this.cargarPresentacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarPresentacion():void{
    this.presentacionS.lista().subscribe(data => {this.presentacion = data;})
  }

  Delete(id?:number){
    if(id != undefined){
      this.presentacionS.delete(id).subscribe(
        data => {
          this.cargarPresentacion();
        },err => {
          alert("No se pudo borrar la Presentacion");
        }
      )
    }
  }

}
