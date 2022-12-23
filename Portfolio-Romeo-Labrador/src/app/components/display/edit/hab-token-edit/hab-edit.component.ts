import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { SHabilidadService } from 'src/app/service/s-habilidad.service';

@Component({
  selector: 'app-hab-edit',
  templateUrl: './hab-edit.component.html',
  styleUrls: ['./hab-edit.component.css']
})
export class HabEditComponent implements OnInit {
  habilidad:Habilidad = null;

  constructor(private sHabilidad:SHabilidadService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(
      data => {
        this.habilidad = data;
      }, err =>{
        alert("error al modificar la experiencia32")
        this.router.navigate([''])
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.habilidad).subscribe(
      data =>{
        this.router.navigate(['']);
      },err =>{
        alert("error al modificar la experiencia")
        this.router.navigate([''])
      }
    )
  }

}
