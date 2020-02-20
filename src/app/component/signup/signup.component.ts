import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { User } from '../../interfaces/user.interface';

import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  errorMessage: string = '';
   constructor(private authService: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

   signup(form) {
         // Store form value on data
        const data: User = form.value;
        this.authService.signUp(data.email, data.password)
        .then(result => {
          this.errorMessage = ''; // reset error message
          this.userService.addNewUser(result.user.uid, data.name, data.address)
          .then(() => {
            this.router.navigate(['/']); // Go to home
          });
        })
        .catch(err => {
          this.errorMessage = err.message;
        });
    }


}
