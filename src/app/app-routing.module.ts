import { UserGuard } from './services/guards/user-guard.guard';
import { AuthGuard } from './services/guards/auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CartComponent } from './component/cart/cart.component';
import { GoodsComponent } from './component/goods/goods.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {index: 0}},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cart', component: CartComponent,  canActivate: [AuthGuard],  data: {index: 1}},
  {path: 'signup', component: SignupComponent, canActivate: [UserGuard], data: {index: 4}},
  {path: 'admin', component: GoodsComponent,  canActivate: [AuthGuard], data: {index: 3}},
  {path: 'login', component: LoginComponent, canActivate: [UserGuard], data: {index: 2}},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
