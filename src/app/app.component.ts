import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'lemans-workshop';
  imageData$: Observable<ImageData>;
  imageUrls$: Observable<string[]>;
  imageUrls: string[];

  constructor(private dataService: DataService) {
    this.imageData$ = this.dataService.getImageData();
    console.warn('imageData', this.imageData$);

    // this.imageData$.subscribe((c: ImageData) => c.data.forEach(item => this.imageUrls = [ this.dataService.getImageMetaData(item), ... ]));
  }

  getImageMetaData(url: string) {
    this.imageUrls$ = this.dataService.getImageMetaData(url);
    console.warn('imageUrls$', this.imageUrls$);
  }

  // getItemImageUrl(data) {

  // }
}
