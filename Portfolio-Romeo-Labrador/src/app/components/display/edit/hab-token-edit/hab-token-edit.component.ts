import { Component, OnInit,Input,Output} from '@angular/core';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/service/s-habilidad.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-hab-token-edit',
  templateUrl: './hab-token-edit.component.html',
  styleUrls: ['./hab-token-edit.component.css']
})
export class HabTokenEditComponent implements OnInit {

  nombreH: string = "";

  descripcionH: string = "";

  cantidad: number= 0;

  constructor(private sHabilidad:SHabilidadService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const habi = new Habilidad(this.nombreH,this.descripcionH,this.cantidad);
    this.sHabilidad.save(habi).subscribe(
      data =>{
      alert("Habilidad Creada");
      this.router.navigate(['']);
  }, err =>{
    alert("Fallo");
    this.router.navigate([''])
  })
  }

}
