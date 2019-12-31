import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthUserListComponent } from './pages/auth/auth-user-list/auth-user-list.component';
import { AuthUserProfileComponent } from './pages/auth/auth-user-profile/auth-user-profile.component';
import { AuthUserCreateComponent } from './pages/auth/auth-user-create/auth-user-create.component';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AConfigService } from './services/auth/a-config.service'
import { AUsersService } from './services/auth/a-users.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthUserListComponent,
    AuthUserProfileComponent,
    AuthUserCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [AConfigService, AUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
