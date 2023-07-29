import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Auth {
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

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<Auth>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB2lVFl5DQFep_9Y3rJ3YXUNjsBEKvBmtI', {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

  logIn(email: string, password: string) {
    return this.http.post<Auth>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB2lVFl5DQFep_9Y3rJ3YXUNjsBEKvBmtI', {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
