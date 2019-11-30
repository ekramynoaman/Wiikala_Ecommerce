import { AuthService } from 'src/app/services/auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import {Good} from 'src/app/interfaces/good.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private fireS: AngularFirestore, private authS: AuthService) { }

  addToCart(data: Good) {
    return this.fireS.collection(`users/${this.authS.userId}/cart`).add(data);
  }

  getToCart() {
    return this.fireS.collection(`users/${this.authS.userId}/cart`).snapshotChanges();
  }
  deleteCart(id) {
    return this.fireS.doc(`users/${this.authS.userId}/cart/${id}`).delete();
  }
  updateCart(id, amount) {
    return this.fireS.doc(`users/${this.authS.userId}/cart/${id}`).update({
      amount,
    });
  }
}
