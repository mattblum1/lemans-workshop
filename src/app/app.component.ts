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
  imageData$: Observable<ImageData>;
  imageUrls$: Observable<string[]>;

  title = `Lemans' Workshop`;
  imageUrls: string[] = [];

  name = '';
  location = '';
  reasons: string[] = ['Business', 'Product', 'Jobs'];
  selectedReason: string = null;
  message = '';

  constructor(private dataService: DataService) {
    this.imageData$ = this.dataService.getImageData();
  }

  doSelectionChange(e: MatSelectChange) {
    this.selectedReason = e.value;
  }

  getImageMetaData(url: string) {
    this.imageUrls$ = this.dataService.getImageMetaData(url);
    console.warn('imageUrls$', this.imageUrls$);
  }

  submit() {
    console.warn('name', this.name);
    console.warn('location', this.location);
    console.warn('reason', this.selectedReason);
    console.warn('message', this.message);
  }
}
