import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { MatSelectChange } from '@angular/material/select';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = `Lemans' Workshop`;
  imageUrls: string[] = [];

  constructor() {}
}
