import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  username: string = '';
  password: string = '';

  // correctUsername: string = 'Lemans';
  // correctPassword: string = 'AlphaBeta123';
  correctUsername: string = '1';
  correctPassword: string = '2';

  isLoggedIn: boolean = false;

  constructor(private router: Router) {
    this.logout();
  }

  logout() {
    this.isLoggedIn = false;
    console.warn('logging out');
    this.router.navigateByUrl('/');
  }

  submit() {
    if (
      this.username === this.correctUsername &&
      this.password === this.correctPassword
    ) {
      this.isLoggedIn = true;
      console.warn('isLoggedIn', this.isLoggedIn);
      this.router.navigateByUrl('/home');
    } else {
      this.isLoggedIn = false;
      console.warn('isLoggedIn', this.isLoggedIn);
    }
  }
}
