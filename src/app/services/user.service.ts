import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userService: AngularFirestore, private authService: AuthService) { }

  addNewUser(id, name, address) {
    return this.userService.doc('users/' + id).set({
      name,
      address
    });

  }
}
