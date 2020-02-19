import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private firestore: AngularFirestore, private goToStorage: AngularFireStorage) { }

  // get all goods
  getAll() {
    return this.firestore.collection('goods').snapshotChanges();
  }

  // Add New Good Function
  addNewGood(name: string, price: number, image: File) {
  return new Promise ((resolve, reject) => {
    const ref = this.goToStorage.ref('goods/' + image.name);
    ref.put(image).then(() => {
      ref.getDownloadURL().subscribe(photoUrl => {
        this.firestore.collection('goods').add({
          name,
          price,
          photoUrl
        }).then(() => resolve('good is added'));
      });
    });
  });
  }

}
