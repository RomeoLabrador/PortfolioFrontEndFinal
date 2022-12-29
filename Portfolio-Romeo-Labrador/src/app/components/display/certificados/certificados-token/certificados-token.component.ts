import { Component, OnInit } from '@angular/core';
import { DesplazamientoService } from 'src/app/components/desplazamiento.service';
import { Certificados } from 'src/app/model/certificados';
import { CertificadosService } from 'src/app/service/certificados.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-certificados-token',
  templateUrl: './certificados-token.component.html',
  styleUrls: ['./certificados-token.component.css']
})
export class CertificadosTokenComponent implements OnInit {

  certificados:Certificados[] = [];
  constructor(protected servicio:DesplazamientoService,private certificadosS:CertificadosService,private tokenS:TokenService) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarCertificados();
    if(this,this.tokenS.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarCertificados(){
    this.certificadosS.lista().subscribe( data =>{
      this.certificados = data;
    })
  }

  delete(id:number){
    if(id != undefined){
      this.certificadosS.delete(id).subscribe(
        data =>{
          this.cargarCertificados();
        }, err => {
          alert("no se pudo eliminar el Certificado");
        }
      )
    }
  }

}
