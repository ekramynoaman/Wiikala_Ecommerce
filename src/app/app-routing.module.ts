import { AuthGuard } from './services/guards/auth.guard';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { CartComponent } from './component/cart/cart.component'  canActivate =[AuthGuard];
import { GoodsComponent } from './component/goods/goods.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { NotfoundComponent } from './component/notfound/notfound.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'cart', component: CartComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'admin', component: GoodsComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', component: NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
