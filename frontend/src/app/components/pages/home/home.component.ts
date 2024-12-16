import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Restaurant } from 'src/app/shared/models/Restaurant';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  restaurants: Restaurant[] = [];

  constructor(
    private restaurantservice: RestaurantService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log('Route Parameters:', params); // vérifier searchTerm ou tag

      let restaurantsObservable: Observable<Restaurant[]>;

      if (params.searchTerm) {
        // Fetch restaurants based on the search term
        restaurantsObservable = this.restaurantservice.getAllRestaurantsBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        // Fetch restaurants based on the tag
        restaurantsObservable = this.restaurantservice.getAllRestaurantsByTag(params.tag);
      } else {
        // Fetch all restaurants by default
        restaurantsObservable = this.restaurantservice.getAll();
      }

      // Subscribe in all cases to update the restaurants array
      restaurantsObservable.subscribe({
        next: (serverRestaurants) => {
          this.restaurants = serverRestaurants;
        },
        error: (err) => {
          console.error('Error fetching restaurants:', err);
        }
      });
    });
  }
}
