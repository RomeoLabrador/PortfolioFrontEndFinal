import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Social } from 'src/app/model/social';
import { SocialService } from 'src/app/service/social.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
  
  social:Social[] = [];

  isLogged = false;

  constructor(private socialS:SocialService, private token:TokenService) { }

  ngOnInit(): void {
    this.cargarSocial();
    if(this.token.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }

  cargarSocial():void{
    this.socialS.lista().subscribe(data => {this.social = data;})
  }

}
