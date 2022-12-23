import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { applyStyles } from '@popperjs/core';
import { AppComponent } from './app.component';
import { HabEditComponent } from './components/display/edit/hab-token-edit/hab-edit.component';
import { HabTokenEditComponent } from './components/display/edit/hab-token-edit/hab-token-edit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogindisplayComponent } from './login/logindisplay/logindisplay.component';

const routes: Routes = [
  {path:"",component: HomeComponent},
  {path:"login", component:LogindisplayComponent},
  {path:"home", component:HomeComponent},
  {path:"nuevahabilidad", component:HabTokenEditComponent},
  {path:"editarhabilidad/:id", component:HabEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
