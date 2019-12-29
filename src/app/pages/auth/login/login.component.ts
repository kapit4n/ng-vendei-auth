import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = "";
  password = "";
  constructor() { }

  ngOnInit() {
  }

  login() {
    if (this.user === 'admin' && this.password === 'admin') {
      console.log("Redirect to ");
    }
  }

}
