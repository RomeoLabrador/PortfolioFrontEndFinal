import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudios } from 'src/app/model/estudios';
import { EstudiosService } from 'src/app/service/estudios.service';
import { ImageService } from 'src/app/service/image.service';

@Component({
  selector: 'app-est-edit',
  templateUrl: './est-edit.component.html',
  styleUrls: ['./est-edit.component.css']
})
export class EstEditComponent implements OnInit {

  estudios : Estudios = null;

  constructor(private estudiosS:EstudiosService,private activatedRouter:ActivatedRoute,private router:Router,public imageService:ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.estudiosS.detail(id).subscribe(data =>{
      this.estudios = data;
    },err =>{
      alert("error al modificar");
      this.router.navigate([""])
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.estudios.img = this.imageService.imagenes.pop();
    this.estudiosS.update(id,this.estudios).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Modificacion exitosa")
      },err =>{
        alert("error al modificar el estudio");
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
