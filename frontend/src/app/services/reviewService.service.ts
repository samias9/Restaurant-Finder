import { Injectable } from '@angular/core';
import { Review } from '../shared/models/Review';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private reviews:Review[] = [];
  constructor() { }

  // Save a new opinion
  addOpinion(review: Review): Observable<Review> {
    review.id = this.reviews.length + 1; // Simple ID generation
    this.reviews.push(review);
    return of(review);
  }

  // Fetch all opinions for a specific restaurant
  getOpinionsByRestaurant(restaurantId: string): Observable<Review[]> {
    return of(this.reviews.filter(review => review.restaurantId === restaurantId));
  }
}
