import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AUsersService } from "../../../services/auth/a-users.service";

@Component({
  selector: 'app-auth-user-list',
  templateUrl: './auth-user-list.component.html',
  styleUrls: ['./auth-user-list.component.css']
})
export class AuthUserListComponent implements OnInit {

  constructor(private router: Router, private usersSvc: AUsersService, ) { }

  users = []

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersSvc.getAll().subscribe(result => {
      this.users = result;
    })
  }

  selectUser(user) {
    this.router.navigate(['/users/' + user.id]);
  }

}
