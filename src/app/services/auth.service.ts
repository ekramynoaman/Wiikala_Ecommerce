import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userId = '';

  constructor(private fireAuth: AngularFireAuth) {
    this.user = fireAuth.user;
  }

  signUp(email, password) {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logIn(email, password) {
    return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logOut() {
    return this.fireAuth.auth.signOut();

  }
}
