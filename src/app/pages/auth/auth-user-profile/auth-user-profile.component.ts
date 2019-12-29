import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-auth-user-profile',
  templateUrl: './auth-user-profile.component.html',
  styleUrls: ['./auth-user-profile.component.css']
})
export class AuthUserProfileComponent implements OnInit {

  id = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = Number.parseInt(this.route.snapshot.paramMap.get("id"));
  }

}
