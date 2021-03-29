import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginCredentials } from '../models/login-credentials';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  jwt: string | null = null;
  userDetails = undefined;

  loginUrl = "https://bilingual-children.herokuapp.com/login";

  redirectUrl: string;

  constructor(private http: HttpClient) {

  }

  login(loginCredentials: LoginCredentials): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    const promise = this.http.post(this.loginUrl, loginCredentials, httpOptions)
      .toPromise();

    promise
      .then(response => {
        this.jwt = response['jwt'];

        sessionStorage.setItem('jwt', this.jwt);
      })
      .catch(error => {
        console.log(error);
      })

    return promise;
  }

  logout(): void {
    sessionStorage.removeItem('jwt');
    this.jwt = undefined;
  }
}