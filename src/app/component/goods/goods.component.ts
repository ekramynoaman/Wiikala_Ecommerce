import { GoodsService } from './../../services/goods.service';
import { Good } from './../../interfaces/good.interface';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AngularFireStorage } from '@angular/fire/storage';


@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.scss']
})
export class GoodsComponent implements OnInit {

  @ViewChild('image', {static: false}) image: ElementRef;


  // New good message
  message;



  constructor(private goodsService: GoodsService) { }
  ngOnInit() {}

  addNewGood(form: NgForm) {
    const name  = (form.value as Good).name;
    const price = (form.value as Good).price;
    const image = (this.image.nativeElement as HTMLInputElement).files[0];
    this.goodsService.addNewGood(name, price, image).then(msg => this.message = msg);
  }

}
