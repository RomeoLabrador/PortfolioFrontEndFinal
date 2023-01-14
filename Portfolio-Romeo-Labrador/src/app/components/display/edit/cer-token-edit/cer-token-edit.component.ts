import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';
import { Certificados } from 'src/app/model/certificados';
import { CertificadosService } from 'src/app/service/certificados.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-cer-token-edit',
  templateUrl: './cer-token-edit.component.html',
  styleUrls: ['./cer-token-edit.component.css']
})
export class CerTokenEditComponent implements OnInit {

  nombreC: string;
  descripcionC:string;
  img:string;


  constructor(private servicio:DesplazamientoService,private certificadosS:CertificadosService, private router:Router, public imageService:ImageService, private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const certificado = new Certificados(this.nombreC, this.descripcionC,this.img);
    certificado.img = this.imageService.imagenes.pop();
    this.certificadosS.save(certificado).subscribe(
      data => {
        alert("Se creo el Certificado");
        this.router.navigate(['']);
      },err =>{
        alert("hubo un fallo");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "foto_";
    this.imageService.uploadImage($event,name) 

  }

}
