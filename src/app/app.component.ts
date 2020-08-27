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

  constructor(private dataService: DataService) {
    this.imageData$ = this.dataService.getImageData();
    console.warn('imageData', this.imageData$);

    this.imageData$.subscribe((d) => console.warn('d', d));
  }
}
