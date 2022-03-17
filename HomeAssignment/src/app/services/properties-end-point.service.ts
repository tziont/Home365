import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Property } from '../types/property';

@Injectable({
  providedIn: 'root',
})
export class PropertiesEndpointService {
  constructor(private http: HttpClient) {}

  getProperties(): Observable<Property[]> {
    return this.http
      .get<Property[]>('http://localhost:3000/api')
      .pipe(map((reponse) => reponse));
  }
}
