import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AUsersService } from "../../../services/auth/a-users.service";

@Component({
  selector: 'app-auth-user-list',
  templateUrl: './auth-user-list.component.html',
  styleUrls: ['./auth-user-list.component.css']
})
export class AuthUserListComponent implements OnInit {

  constructor(private router: Router, private usersSvc: AUsersService,) { }

  users = [
    { id: 1, name: "Luis Arce", img: "https://p1.hiclipart.com/preview/536/303/701/de-rihana-png-clipart.jpg" },
    { id: 2, name: "Sam", img: "http://4.bp.blogspot.com/-Za-RwKOWTgc/T4HgxPsGY-I/AAAAAAAAAC0/Juzd4j_x1WA/s1600/yyy.jpg" },
    { id: 3, name: "Hans", img: "https://www.aceshowbiz.com/images/photo/lecrae.jpg" }]

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersSvc.getAll().subscribe(result => {
      this.users = result;
      console.log(result);
    })
  }

  selectUser(user) {
    this.router.navigate(['/users/' + user.id]);
  }

}
