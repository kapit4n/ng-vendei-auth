import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AUsersService } from "../../../services/auth/a-users.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

interface UserInfo {
  address: string;
  img: string;
  biography: string;
}

interface User {
  username: string;
  email: string;
  img: string;
  id: string;
  'user-infos': UserInfo
}

@Component({
  selector: 'app-auth-user-profile',
  templateUrl: './auth-user-profile.component.html',
  styleUrls: ['./auth-user-profile.component.css']
})
export class AuthUserProfileComponent implements OnInit {

  id = "";
  edit = false;
  user: User = {} as User;
  userInfo: UserInfo = {} as UserInfo;

  error: string;
  userInfoForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private usersSvc: AUsersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.usersSvc.getById(this.id).subscribe(data => {
      this.user = data;
      this.userInfoForm = this.formBuilder.group({
        userId: [this.user.id, Validators.required],
        img: [this.user['user-infos'] ? this.user['user-infos'].img : ''],
        address: [this.user['user-infos'] ? this.user['user-infos'].address : ''],
        biography: [this.user['user-infos'] ? this.user['user-infos'].biography : ''],
      })
    })
  }
  get f() { return this.userInfoForm.controls; }

  save() {
    // submit the data
    this.loading = true;
    console.log(this.userInfoForm.value);
    this.usersSvc.updateInfo(this.userInfoForm.value).subscribe(data => {
      console.log(data);
      this.user['user-infos'] = { img: data.img, address: data.address, biography: data.biography };

      this.userInfoForm = this.formBuilder.group({
        userId: [this.user.id, Validators.required],
        img: [data.img],
        address: [data.address],
        biography: [data.biography],
      })
      this.edit = false;
      this.loading = false;
    }, error => {
      this.error = error;
      this.loading = false;
    })
  }

  editIt() {
    this.edit = true;
  }

}
