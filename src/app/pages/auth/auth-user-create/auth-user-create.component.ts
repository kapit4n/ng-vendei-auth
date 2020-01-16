import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AUsersService } from 'src/app/services/auth/a-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-user-create',
  templateUrl: './auth-user-create.component.html',
  styleUrls: ['./auth-user-create.component.css']
})
export class AuthUserCreateComponent implements OnInit {

  error: string;
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder, 
    private router: Router,
    private authSvc: AUsersService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      realm: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    // submit the data
    this.loading = true;

    this.authSvc.register(this.registerForm.value).pipe(first()).subscribe(data => {
      this.router.navigate(['/login'], { queryParams: { registered: true } });
    }, error => {
      this.error = error;
      this.loading = false;
    })
  }


}
