import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/pages/auth/login/login.component'
import { AuthUserListComponent } from '../app/pages/auth/auth-user-list/auth-user-list.component'
import { AuthUserProfileComponent } from '../app/pages/auth/auth-user-profile/auth-user-profile.component'

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { title: "Login" }
  },
  {
    path: "users",
    component: AuthUserListComponent,
    data: { title: "Users" }
  },
  {
    path: "users/:id",
    component: AuthUserProfileComponent,
    data: { title: "User Profile" }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
