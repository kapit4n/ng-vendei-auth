import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/pages/auth/login/login.component'

const routes: Routes = [{
  path: "",
  component: LoginComponent,
  data: { title: "Login" }
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
