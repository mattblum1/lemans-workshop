import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  @Input() isLoggedIn;
  @Output() isLoggedInEvent = new EventEmitter<boolean>();

  constructor() {}

  logout() {
    this.isLoggedInEvent.emit(false);
  }
}
