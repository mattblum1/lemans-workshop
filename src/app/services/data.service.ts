import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getImageData(): Observable<ImageData> {
    return this.http.get<ImageData>(
      'https://images-api.nasa.gov/search?q=Apollo&description=video'
    );
  }

  getImageMetaData(url: string): Observable<string[]> {
    return this.http.get<string[]>(url);
  }
}
