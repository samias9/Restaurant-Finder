//review-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ReviewService } from 'src/app/services/reviewService.service';
import { Review } from 'src/app/shared/models/Review';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { RestaurantService } from 'src/app/services/restaurant.service';


@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.css']
})
export class ReviewPageComponent implements OnInit {
  review: Review = new Review();
  restaurantId!: string;
  restaurant?: Restaurant;
  reviews: Review[] = []; // Liste des avis
  constructor(
    private reviewService: ReviewService,
    private restaurantService: RestaurantService, 
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId')!;
    this.review.restaurantId = this.restaurantId;
  
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe((restaurant: Restaurant) => {
      this.restaurant = restaurant;
      this.fetchReviews();
    });
  }

submitOpinion(): void {
  this.reviewService.addOpinion(this.review).subscribe(
    (response) => {
      alert('Thank you for your opinion!');
      this.fetchReviews(); // Recharge les avis après soumission
      this.review = new Review(); // Réinitialiser le formulaire
    },
    (error) => {
      alert('An error occurred. Please try again.');
      console.error(error);
    }
  );
}

fetchReviews(): void {
  this.reviewService.getReviewsByRestaurant(this.restaurantId).subscribe(
    (dynamicReviews) => {
      if (this.restaurant) {
        const staticReviews = this.restaurant.reviews || [];
        this.restaurant.reviews = [...staticReviews, ...dynamicReviews];
      }
    },
    (error) => {
      console.error('Error fetching reviews:', error);
    }
  );
}

}
