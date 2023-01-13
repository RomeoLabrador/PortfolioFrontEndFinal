import { Component, OnInit } from '@angular/core';
import { PresentacionService } from 'src/app/service/presentacion.service';
import { Presentacion } from 'src/app/model/presentacion';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  presentacion:Presentacion[] = []

  constructor(private presentacionS:PresentacionService) { }

  ngOnInit(): void {
    this.cargarPresentacion();
  }

  cargarPresentacion():void{
    this.presentacionS.lista().subscribe(data => {this.presentacion = data;})
  }

}
