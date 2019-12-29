import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-auth-user-list',
  templateUrl: './auth-user-list.component.html',
  styleUrls: ['./auth-user-list.component.css']
})
export class AuthUserListComponent implements OnInit {

  constructor(private router: Router) { }

  users = [{ id: 1, name: "Luis Arce" }, { id: 2, name: "Sam" }, { id: 3, name: "Hans" }]

  ngOnInit() {
  }

  selectUser(user) {
    this.router.navigate(['/users/' + user.id]);
  }

}
