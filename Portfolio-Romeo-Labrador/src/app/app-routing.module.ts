import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applyStyles } from '@popperjs/core';
import { AppComponent } from './app.component';
import { CerEditComponent } from './components/display/edit/cer-token-edit/cer-edit.component';
import { CerTokenEditComponent } from './components/display/edit/cer-token-edit/cer-token-edit.component';
import { EstEditComponent } from './components/display/edit/est-token-edit/est-edit/est-edit.component';
import { EstTokenEditComponent } from './components/display/edit/est-token-edit/est-token-edit.component';
import { HabEditComponent } from './components/display/edit/hab-token-edit/hab-edit.component';
import { HabTokenEditComponent } from './components/display/edit/hab-token-edit/hab-token-edit.component';
import { PresentEditComponent } from './components/header/presentacion/present-edit.component';
import { EditSocialComponent } from './components/header/social/edit-social.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogindisplayComponent } from './login/logindisplay/logindisplay.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login", component:LogindisplayComponent},
  {path:"home", component:HomeComponent},
  {path:"nuevahabilidad", component:HabTokenEditComponent},
  {path:"editarhabilidad/:id", component:HabEditComponent},
  {path:"nuevoestudio", component:EstTokenEditComponent},
  {path:"editarestudio/:id", component:EstEditComponent},
  {path:"nuevocertificado", component:CerTokenEditComponent},
  {path:"editarcertificado/:id", component:CerEditComponent},
  {path:"editarpresentacion/:id", component:PresentEditComponent},
  {path:"editarsocial/:id", component:EditSocialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
