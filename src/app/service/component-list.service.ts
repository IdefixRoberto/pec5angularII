import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PixabayApiResponse } from '../models/pixabayApiCard.interficie';

@Injectable({
  providedIn: 'root',
})
export class ComponentListService {
  private apiUrl = 'https://pixabay.com/api/';
  private apiKey = '42803953-ecc46e1aa4968be28136deb62'; // he d'incloure el codi que em dona la web

  constructor(private http: HttpClient) {}

  getAllImages(): Observable<PixabayApiResponse> {
    return this.http.get<PixabayApiResponse>(
      `${this.apiUrl}?key=${this.apiKey}&per_page=10`
    );
  }

  getImageById(id: number): Observable<PixabayApiResponse> {
    return this.http.get<PixabayApiResponse>(
      `${this.apiUrl}?key=${this.apiKey}&id=${id}`
    );
  }
}
