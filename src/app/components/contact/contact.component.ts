import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name = '';
  location = '';
  reasons: string[] = ['Business', 'Product', 'Jobs'];
  selectedReason: string = null;
  message = '';

  constructor() {}

  submit() {
    console.warn('name', this.name);
    console.warn('location', this.location);
    console.warn('reason', this.selectedReason);
    console.warn('message', this.message);
  }

  doSelectionChange(e: MatSelectChange) {
    this.selectedReason = e.value;
  }
}
