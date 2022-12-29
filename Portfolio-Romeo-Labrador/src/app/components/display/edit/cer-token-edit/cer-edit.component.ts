import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Certificados } from 'src/app/model/certificados';
import { CertificadosService } from 'src/app/service/certificados.service';

@Component({
  selector: 'app-cer-edit',
  templateUrl: './cer-edit.component.html',
  styleUrls: ['./cer-edit.component.css']
})
export class CerEditComponent implements OnInit {

  certificados : Certificados = null;

  constructor(private certificadosS:CertificadosService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.certificadosS.detail(id).subscribe(data =>{
      this.certificados = data;
    },err =>{
      alert("error al modificar");
      this.router.navigate([""])
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.certificadosS.update(id,this.certificados).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Modificacion exitosa")
      },err =>{
        alert("error al modificar el certificado");
        this.router.navigate(['']);
      }
    )
  }

}


