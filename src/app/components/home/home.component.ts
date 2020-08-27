import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imageData$: Observable<ImageData>;
  imageUrls$: Observable<string[]>;

  constructor(private dataService: DataService) {
    this.imageData$ = this.dataService.getImageData();
  }

  getImageMetaData(url: string) {
    this.imageUrls$ = this.dataService.getImageMetaData(url);
  }
}
