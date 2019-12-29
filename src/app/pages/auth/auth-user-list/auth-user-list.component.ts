import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-user-list',
  templateUrl: './auth-user-list.component.html',
  styleUrls: ['./auth-user-list.component.css']
})
export class AuthUserListComponent implements OnInit {

  constructor() { }

  users = [{ id: 1, name: "Luis Arce" }, { id: 2, name: "Sam" }, { id: 3, name: "Hans" }]

  ngOnInit() {
  }

  selectUser(user) {
    console.log(`Open ${user.name}`)
  }

}
