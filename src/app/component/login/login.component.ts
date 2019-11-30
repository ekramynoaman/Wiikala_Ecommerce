import { Router } from '@angular/router';
import { User } from './../../interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authFire: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(form) {
    const data: User = form.value;
    this.authFire.logIn(data.email, data.password)
    .then(result => {
      console.log(result);
      this.router.navigate(['/']);
    })
    .catch(err => console.log(err));

  }

}
