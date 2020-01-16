import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AUsersService } from "../../../services/auth/a-users.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

interface UserInfo {
  username: string;
  email: string;
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
  edit = false;
  userInfo: UserInfo = {} as UserInfo;

  error: string;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private router: Router,
    private usersSvc: AUsersService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.usersSvc.getById(this.id).subscribe(userInfo => {
      this.userInfo = userInfo;
      this.registerForm = this.formBuilder.group({
        realm: [userInfo.realm, Validators.required],
        email: [userInfo.email, Validators.required],
        username: [userInfo.username, Validators.required],
        password: [userInfo.password, [Validators.required, Validators.minLength(6)]],
        img: [userInfo.img || ''],
      })
    })
  }
  get f() { return this.registerForm.controls; }

  save() {
    // submit the data
    this.loading = true;
    console.log(this.registerForm.value);
    this.usersSvc.update(this.registerForm.value).subscribe(data => {
      this.router.navigate(['/login'], { queryParams: { registered: true } });
    }, error => {
      this.error = error;
      this.loading = false;
    })
  }

  editIt() {
    this.edit = true;
  }

}
