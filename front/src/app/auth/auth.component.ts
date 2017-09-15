import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit() {
  }

  login = (email: string, password: string): void => {
    console.log('onsubmit');
    this._auth.signin(email, password)
      .subscribe((succees: boolean) => {
        alert('Bienvenu');
      });
  }

}
