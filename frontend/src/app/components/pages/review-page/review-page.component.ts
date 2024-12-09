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
  constructor(
    private reviewService: ReviewService,
    private restaurantService: RestaurantService, // Fetch restaurant data
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.paramMap.get('restaurantId')!;
    this.review.restaurantId = this.restaurantId;
  
    // Fetch restaurant details
    this.restaurantService.getRestaurantById(this.restaurantId).subscribe((restaurant: Restaurant) => {
      this.restaurant = restaurant;
    });
  }
  
  submitOpinion(): void {
    this.reviewService.addOpinion(this.review).subscribe(() => {
      alert('Thank you for your opinion!');
      this.review = new Review(); // Reset the form
    });
}
}
