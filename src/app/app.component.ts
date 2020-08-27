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
  // correctUsername: string[] = ['Lemans', '1'];
  // correctPassword: string[] = ['AlphaBeta123', '1'];

  credentials: Credentials[] = [
    { username: 'Lemans', password: 'AlphaBeta123' },
    { username: 'Matt', password: 'LetMeIn1' },
  ];

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
    const currentCredentials = this.credentials.find(
      (c) => c.username === this.username
    );

    if (currentCredentials.password === this.password) {
      this.isLoggedIn = true;
      this.router.navigateByUrl('/home');
    } else {
      this.isLoggedIn = false;
    }
  }
}

interface Credentials {
  username: string;
  password: string;
}
