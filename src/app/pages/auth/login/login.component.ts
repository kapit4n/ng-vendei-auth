import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ALoginService } from "../../../services/auth/a-login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = "";
  password = "";
  constructor(private router: Router, private loginSvc: ALoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginSvc.login({ userName: this.user, password: this.password }).subscribe(res => {
      console.log(res);
    })
    if (this.user === 'admin' && this.password === 'admin') {
    }
    this.router.navigate(['/users']);
  }

}
