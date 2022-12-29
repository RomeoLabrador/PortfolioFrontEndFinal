import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SocialComponent } from './components/header/social/social.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { LoginButtonComponent } from './components/header/login-button/login-button.component';
import { PresentacionComponent } from './components/header/presentacion/presentacion.component';
import { ContenedorComponent } from './components/navegacion/contenedor/contenedor.component';
import { BotonEstudiosComponent } from './components/navegacion/boton-estudios/boton-estudios.component';
import { BotonHabilidadesComponent } from './components/navegacion/boton-habilidades/boton-habilidades.component';
import { BotonCertificadosComponent } from './components/navegacion/boton-certificados/boton-certificados.component';
import { DisplayComponent } from './components/display/display.component';
import { EstudiosTokenComponent } from './components/display/estudios-token/estudios-token.component';
import { HabilidadesPageComponent } from './components/display/habilidades/habilidades-page/habilidades-page.component';
import { HabilidadesTokenComponent } from './components/display/habilidades/habilidades-token/habilidades-token.component';
import { DatePipe } from '@angular/common';
import { CertificadosComponent } from './components/display/certificados/certificados.component';
import { CertificadosTokenComponent } from './components/display/certificados/certificados-token/certificados-token.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogindisplayComponent } from './login/logindisplay/logindisplay.component';
import { EstTokenEditComponent } from './components/display/edit/est-token-edit/est-token-edit.component';
import { CerTokenEditComponent } from './components/display/edit/cer-token-edit/cer-token-edit.component';
import { PersonaPruebaComponent } from './model/persona-prueba/persona-prueba.component';
import { interceptorProvider, InterceptorService } from './service/interceptor-service';
import { HabTokenEditComponent } from './components/display/edit/hab-token-edit/hab-token-edit.component';
import { HabEditComponent } from './components/display/edit/hab-token-edit/hab-edit.component';
import { EstEditComponent } from './components/display/edit/est-token-edit/est-edit/est-edit.component';
import { CerEditComponent } from './components/display/edit/cer-token-edit/cer-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    SocialComponent,
    BannerComponent,
    LoginButtonComponent,
    PresentacionComponent,
    ContenedorComponent,
    BotonEstudiosComponent,
    BotonHabilidadesComponent,
    BotonCertificadosComponent,
    DisplayComponent,
    EstudiosTokenComponent,
    HabilidadesPageComponent,
    HabilidadesTokenComponent,
    CertificadosComponent,
    CertificadosTokenComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    LogindisplayComponent,
    EstTokenEditComponent,
    CerTokenEditComponent,
    PersonaPruebaComponent,
    HabTokenEditComponent,
    HabEditComponent,
    EstEditComponent,
    CerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DatePipe,DisplayComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
