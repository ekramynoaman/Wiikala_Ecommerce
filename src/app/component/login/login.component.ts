import { Router } from '@angular/router';
import { User } from './../../interfaces/user.interface';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  // Error message
  errorMessage = '';

  constructor(private authSer: AuthService, private router: Router) { 
    // this.authSer.user.subscribe(user => {
    //   if ( user) {
    //     this.router.navigate(['/']);
    //   }
    // });
  }

  ngOnInit() {

  }



  login(form) {
    const data: User = form.value;
    this.authSer.logIn(data.email, data.password)
    .then(result => {
      this.errorMessage = '';
      this.router.navigate(['/']);
    })
    .catch(err => this.errorMessage = err.message);

  }

}
