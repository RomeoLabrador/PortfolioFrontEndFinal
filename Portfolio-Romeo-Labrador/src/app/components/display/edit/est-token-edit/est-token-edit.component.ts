import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';

@Component({
  selector: 'app-est-token-edit',
  templateUrl: './est-token-edit.component.html',
  styleUrls: ['./est-token-edit.component.css']
})
export class EstTokenEditComponent implements OnInit {

  nombreE:string;
  descripcionE:string;
  img:string;

  constructor(protected servicio:DesplazamientoService,private estudiosS:EstudiosService, private router:Router) { }


  ngOnInit(): void {
  }

  onCreate():void{
    const estudio = new Estudios(this.nombreE, this.descripcionE,this.img);
    this.estudiosS.save(estudio).subscribe(
      data => {
        alert("Se creo el estudio");
        this.router.navigate(['']);
      },err =>{
        alert("hubo un fallo");
        this.router.navigate(['']);
      }
    )
  }

}
