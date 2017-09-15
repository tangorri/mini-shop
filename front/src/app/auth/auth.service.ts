import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {

  readonly authenticated: false;
  private _token: string;

  constructor(private http: Http) { }

  signin(email: string, password: string): Observable<boolean> {
    // return new Observable<boolean>().map(() => true);
    return this.http.post('http://localhost:3000/users/authenticate/', { email, password })
      .map((response: Response): boolean => {
        console.log('login response');
        return true;
      })
      .catch((error: any): Observable<boolean> => {
        console.error('err on login: ', error);
        return Observable.of<boolean>(false);
      });
  }
}
