import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { ReviewService } from 'src/app/services/reviewService.service';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit {
  restaurant!: Restaurant;
  reviewsPerPage = 3;  // Nombre d'avis par page
  currentPage = 1;     // Page actuelle
  paginatedReviews: any[] = []; // Avis pour la page actuelle

  constructor(
    private activatedRoute: ActivatedRoute,
    private restaurantService: RestaurantService,
    private reviewService: ReviewService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.restaurantService.getRestaurantById(params.id).subscribe((serverRestaurant) => {
          this.restaurant = serverRestaurant;
          this.fetchReviews(params.id);
        });
      }
    });
  }

  fetchReviews(restaurantId: string): void {
    this.reviewService.getReviewsByRestaurant(restaurantId).subscribe(
      (dynamicReviews) => {
        const staticReviews = this.restaurant.reviews || [];
        this.restaurant.reviews = [...staticReviews, ...dynamicReviews];
        this.updatePaginatedReviews();
        this.calculateAverageStars(); // Recalculer les étoiles après le chargement des avis
      },
      (error) => {
        console.error('Error fetching reviews:', error);
      }
    );
  }
   // Calcule la moyenne des étoiles en fonction des avis
   calculateAverageStars(): void {
    if (this.restaurant.reviews && this.restaurant.reviews.length > 0) {
      const totalStars = this.restaurant.reviews.reduce((sum, review) => sum + review.rating, 0);
      this.restaurant.stars = totalStars / this.restaurant.reviews.length;
    } else {
      this.restaurant.stars = 0; // Pas d'avis, donc 0 étoiles
    }
  }

  // Met à jour les avis paginés pour la page actuelle
  updatePaginatedReviews(): void {
    const startIndex = (this.currentPage - 1) * this.reviewsPerPage;
    const endIndex = startIndex + this.reviewsPerPage;
    this.paginatedReviews = this.restaurant.reviews.slice(startIndex, endIndex);
  }

  // Change de page
  changePage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedReviews();
  }

  // Retourne le nombre total de pages
  get totalPages(): number {
    return Math.ceil(this.restaurant.reviews.length / this.reviewsPerPage);
  }
}
