import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isopen = false;

  // User case
  isUser = false;

  constructor(private authSer: AuthService) { }

  ngOnInit() {
    this.authSer.user.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.authSer.userId = user.uid;
      } else {
        this.isUser = false;
        this.authSer.userId = '';

      }
    });

  }
  // Toggle navbar
  toggleNavbar() {
    this.isopen = !this.isopen;
  }

  logOut() {
    this.authSer.logOut();
  }

}
