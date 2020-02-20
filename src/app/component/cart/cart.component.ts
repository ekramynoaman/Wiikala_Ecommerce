import { Shopping } from './../../interfaces/shopping.interface';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { database } from 'firebase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cart: Shopping[] = [];

  constructor(private cartS: CartService) { }

  ngOnInit() {
    this.cartS.getToCart().subscribe(cart => {
      this.cart = cart.map(data => {
        return{
        id: data.payload.doc.id,
        ... data.payload.doc.data()
      };

      });
    });

  }

  deleteCart(index) {
    this.cartS.deleteCart(this.cart[index].id);
  }
  updateCart(index) {
    this.cartS.updateCart(this.cart[index].id, this.cart[index].amount);
  }

}
