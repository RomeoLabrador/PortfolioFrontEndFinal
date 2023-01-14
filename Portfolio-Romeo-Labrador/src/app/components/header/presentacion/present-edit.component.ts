import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Presentacion } from 'src/app/model/presentacion';
import { PresentacionService } from 'src/app/service/presentacion.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-present-edit',
  templateUrl: './present-edit.component.html',
  styleUrls: ['./present-edit.component.css']
})
export class PresentEditComponent implements OnInit {

  presentacion : Presentacion = null;

  constructor(private presentacionS:PresentacionService,private activatedRouter:ActivatedRoute,private router:Router, public imageService:ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.presentacionS.detail(id).subscribe(data =>{
      this.presentacion = data;
    },err =>{
      alert("error al modificar");
      this.router.navigate([""])
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.presentacion.img = this.imageService.imagenes.pop();
    this.presentacionS.update(id,this.presentacion).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Modificacion exitosa")
      },err =>{
        alert("error al modificar La presentacion");
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
