import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AUsersService } from "../../../services/auth/a-users.service";

interface UserInfo {
  name: string;
  img: string;
  id: string;
}

@Component({
  selector: 'app-auth-user-profile',
  templateUrl: './auth-user-profile.component.html',
  styleUrls: ['./auth-user-profile.component.css']
})
export class AuthUserProfileComponent implements OnInit {

  id = "";
  userInfo: UserInfo = {} as UserInfo;
  constructor(private route: ActivatedRoute, private usersSvc: AUsersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.usersSvc.getById(this.id).subscribe(userInfo => {
      this.userInfo = userInfo;
    })
  }

}
