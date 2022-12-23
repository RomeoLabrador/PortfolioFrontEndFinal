import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { DesplazamientoService } from '../components/desplazamiento.service';
import { LoginUsuario } from '../model/login-usuario';
import { TokenService } from '../service/token.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!:string;
  roles:string[] = [];
  errMsj!:string;


  constructor(private router:Router, private servicio:DesplazamientoService, private tokenService:TokenService, private authService:AuthService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 
    this.authService.login(this.loginUsuario).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }

  Regresar(){
    this.router.navigate([''])
  }

  log(){
    this.servicio.LoginSuccess.emit();
    this.router.navigate(['./home'])
  }

}
