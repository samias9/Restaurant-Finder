import { Injectable } from '@angular/core';
import { Review } from '../shared/models/Review';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:5003/api/reviews';  // URL de l'API

  private reviews:Review[] = [];
  constructor(private http: HttpClient) { }

  // Méthode pour ajouter un avis
  addOpinion(review: Review): Observable<any> {
    return this.http.post(this.apiUrl, review); 
  }

  // Récupérer les avis pour un restaurant spécifique
  getReviewsByRestaurant(restaurantId: string): Observable<Review[]> {
    return this.http.get<Review[]>(`${this.apiUrl}/${restaurantId}`);
  }

  // Fetch all opinions for a specific restaurant
  getOpinionsByRestaurant(restaurantId: string): Observable<Review[]> {
    return of(this.reviews.filter(review => review.restaurantId === restaurantId));
  }
}
