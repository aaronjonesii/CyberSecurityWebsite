import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth/auth.service';

@Component({
  selector: 'anon-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  profile_json = null;
  code = "print('Something Random to test Highlightjs')";

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
    this.auth.userProfile$.subscribe( profile => this.profile_json = JSON.parse(JSON.stringify(profile, null, 2)) );
  }

}
