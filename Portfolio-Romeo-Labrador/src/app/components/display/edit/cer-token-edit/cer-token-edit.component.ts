import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';
import { Certificados } from 'src/app/model/certificados';
import { CertificadosService } from 'src/app/service/certificados.service';

@Component({
  selector: 'app-cer-token-edit',
  templateUrl: './cer-token-edit.component.html',
  styleUrls: ['./cer-token-edit.component.css']
})
export class CerTokenEditComponent implements OnInit {

  nombreC: string;
  descripcionC:string;


  constructor(private servicio:DesplazamientoService,private certificadosS:CertificadosService, private router:Router) { }

  ngOnInit(): void {
  }

  onCreate():void{
    const certificado = new Certificados(this.nombreC, this.descripcionC);
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

}
