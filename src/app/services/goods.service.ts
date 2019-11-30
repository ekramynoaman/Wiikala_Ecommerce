import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private firestore: AngularFirestore) { }

  // get all goods
  getAll() {
    return this.firestore.collection('goods').snapshotChanges();
  }

}
