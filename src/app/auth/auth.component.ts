import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(private authService: AuthService) {}

  isLoggedIn = false;
  errorInfo: string = '';

  onSwitchingMode() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  onSubmit(form: NgForm) {
    console.log(form.value);

    if(!form.valid) {
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    if(this.isLoggedIn === true) {
      this.authService.logIn(email, password).subscribe(responseLogIn => {
        console.log(responseLogIn);
      }, errorLogIn => {
        switch(errorLogIn.error.error.message) {
          case 'EMAIL_NOT_FOUND':
            this.errorInfo = 'Email not registered!';
            break;
          case 'INVALID_PASSWORD':
            this.errorInfo = 'Password incorrect!';
            break;  
        }
        
      });

    } else {
      this.authService.signUp(email, password).subscribe(responseSignUp => {
        console.log(responseSignUp);
      }, errorSignUp => {
        switch(errorSignUp.error.error.message) {
          case 'EMAIL_EXISTS':
            this.errorInfo = 'Email already exists!';
        }
      });
    }
    

    form.reset();

  }

}
