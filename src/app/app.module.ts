import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { GoodsComponent } from './component/goods/goods.component';
import { CartComponent } from './component/cart/cart.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupComponent } from './component/signup/signup.component';
import { NotfoundComponent } from './component/notfound/notfound.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    GoodsComponent,
    CartComponent,
    NavbarComponent,
    SignupComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyAsgczs_-eDl1XfZ8M7e5SjPQBFQOnk9Ws',
      authDomain: 'wikala-2a679.firebaseapp.com',
      databaseURL: 'https://wikala-2a679.firebaseio.com',
      projectId: 'wikala-2a679',
      storageBucket: 'wikala-2a679.appspot.com',
      messagingSenderId: '1096928888913',
      appId: '1:1096928888913:web:1b788393323fa1e8349070',
      measurementId: 'G-LV9YD00L9Z',
    }),

    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


