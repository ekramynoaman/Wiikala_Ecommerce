import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isopen = false;
  isUser = false;

  constructor(private authFire: AuthService) { }

  ngOnInit() {
    this.authFire.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.authFire.userId = user.uid;
      } else {
        this.isUser = false;
        this.authFire.userId = '';

      }
    });

  }

  toggleNavbar() {
    this.isopen = !this.isopen;
  }

  logOut() {
    this.authFire.logOut();
  }

}
