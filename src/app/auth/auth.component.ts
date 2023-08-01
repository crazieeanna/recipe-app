import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService, private router: Router) {}

  isLoggedIn = true;
  errorMsg: string = '';

  swtichToLogIn() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    console.log(form);
    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoggedIn === true) {
      this.authService.logIn(email, password).subscribe(responseLogIn => {
        console.log(responseLogIn);
        this.router.navigate(['/recipes']);
      }, errorLogIn => {
        console.log(errorLogIn);
        switch(errorLogIn.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            this.errorMsg = 'Email not registered, please sign up!';
            break;
          case 'INVALID_PASSWORD':
            this.errorMsg = 'password is invalid, please check your password!';
            break;  
        }  
      })

    } else {
      this.authService.signUp(email, password).subscribe(responseSignUp => {
        console.log(responseSignUp);
      }, errorSignUp => {
        console.log(errorSignUp);
        switch(errorSignUp.error.error.message) {
          case 'EMAIL_EXISTS':
            this.errorMsg = 'Email already exists!';
        }
      });
    }
    form.reset();
  }

}
