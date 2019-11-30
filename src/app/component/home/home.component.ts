import { CartService } from './../../services/cart.service';
import { GoodsService } from './../../services/goods.service';
import { Good } from '../../interfaces/good.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  goods: Good[] = [];
  goodsObservable: Subscription;

  // index of item
  add = -1;

  constructor(private goodsservice: GoodsService, private cartS: CartService) { }

  ngOnInit() {
    this.goodsObservable = this.goodsservice.getAll().subscribe(data => {
      this.goods = data.map(element => {
        return {
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        };
      });
    });
  }

  ngOnDestroy() {
    this.goodsObservable.unsubscribe();

  }

  toCart(index) {
    this.add = +index;
  }

  buy(amount: number) {
    const selectedGood = this.goods[this.add];
    const data = {
      name: selectedGood.name,
      amount: +amount,
      price: selectedGood.price
    };
    this.cartS.addToCart(data).then(() => this.add = -1);
  }





}