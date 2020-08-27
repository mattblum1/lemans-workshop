import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  imageData$: Observable<ImageData>;
  imageUrls$: Observable<string[]>;

  title = 'lemans-workshop';
  imageUrls: string[];

  name: string = null;
  location = '';
  reason = '';
  message = '';

  constructor(private dataService: DataService) {
    this.imageData$ = this.dataService.getImageData();
  }

  getImageMetaData(url: string) {
    this.imageUrls$ = this.dataService.getImageMetaData(url);
    console.warn('imageUrls$', this.imageUrls$);
  }

  submitMessage() {
    console.warn('name', this.name);
    console.warn('location', this.location);
    console.warn('reason', this.reason);
    console.warn('message', this.message);
  }
}
