import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Social } from 'src/app/model/social';
import { SocialService } from 'src/app/service/social.service';

@Component({
  selector: 'app-edit-social',
  templateUrl: './edit-social.component.html',
  styleUrls: ['./edit-social.component.css']
})
export class EditSocialComponent implements OnInit {

  social: Social = null;

  constructor(private socialS:SocialService,private activatedRouter:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.socialS.detail(id).subscribe(data =>{
      this.social = data;
    },err =>{
      alert("error al modificar");
      this.router.navigate([""])
    })
  }

  onUpdate():void{
    const id = this.activatedRouter.snapshot.params['id']
    this.socialS.update(id,this.social).subscribe(
      data => {
        this.router.navigate(['']);
        alert("Modificacion exitosa")
      },err =>{
        alert("error al modificar el Social");
        this.router.navigate(['']);
      }
    )
  }

}
