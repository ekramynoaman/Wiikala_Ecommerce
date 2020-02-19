import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // to check if user is logIn
  user: Observable<firebase.User>;

  // to store user id
  userId = '';

  constructor(private fireAuth: AngularFireAuth) {
    // Assign user case to user
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
