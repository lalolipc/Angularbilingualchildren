
/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
*/
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { LoginCredentials } from 'src/app/models/login-credentials';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [Validators.required])
  });

  get email() { return this.loginForm.get('email').value }
  get password() { return this.loginForm.get('password').value }

  constructor(private authService: AuthService, private router: Router) { }
  message: string = '';

  ngOnInit(): void {
  }

  onSubmit(){
let userCredentials = new LoginCredentials();
 userCredentials.email = this.email;
userCredentials.password = this.password;

this.authService.login(userCredentials)
      .then(response => {
        this.message = "login successfully ";

        if (this.authService.jwt) {
          let redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/Phrases';
          
          this.router.navigateByUrl(redirect);
       
        }
      })
      .catch(error => {
        //console.log(error);
        this.message = "ups error";
      });      
  }
}

