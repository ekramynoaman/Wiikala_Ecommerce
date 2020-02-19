import { AuthService } from '../auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private authSer: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return new Promise(resolve => {
      this.authSer.user.subscribe(user => {
        if (user) {
          this.router.navigate(['/']);
          resolve(false);
        } else {
          resolve(true);
        }
      });

    });
  }
}
