import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { UserData } from './user-data.model';
import { tap } from 'rxjs/operators';
import { BehaviorSubject, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Environment } from '../environments/ennvironment';

interface AuthData {
  kind: string,
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  user = new BehaviorSubject<UserData>(null);

  signUp(email: string, password: string) {
    return this.http.post<AuthData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + Environment.key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(userSignUpDataInfo => {
      const expirationDateSignUp = new Date(new Date().getTime()+ +userSignUpDataInfo.expiresIn*1000);
      const userSignUpData = new UserData(userSignUpDataInfo.email, userSignUpDataInfo.localId, userSignUpDataInfo.idToken, expirationDateSignUp);
      this.user.next(userSignUpData);
    }))
  }

  logIn(email: string, password: string) {
    return this.http.post<AuthData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + Environment.key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(userLogInDataInfo => {
      const expirationDateLogIn = new Date(new Date().getTime()+ +userLogInDataInfo.expiresIn*1000);
      const userLogInData = new UserData(userLogInDataInfo.email, userLogInDataInfo.localId, userLogInDataInfo.idToken, expirationDateLogIn);
      this.user.next(userLogInData);
    }))
  }

  logOut() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }
}
