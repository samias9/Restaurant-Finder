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
  constructor(private restaurantservice: RestaurantService, activatedRoute: ActivatedRoute) {
    let restaurantsObservalbe:Observable<Restaurant[]>;
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm){
        restaurantsObservalbe = this.restaurantservice.getAllRestaurantsBySearchTerm(params.searchTerm);
      }
      else if (params.tag)
        restaurantsObservalbe = this.restaurantservice.getAllRestaurantsByTag(params.tag);
      else{
        restaurantsObservalbe=restaurantservice.getAll();

        restaurantsObservalbe.subscribe((serverRestaurants) => {
          this.restaurants = serverRestaurants;
        })
      }
    }
)
    }
  ngOnInit(): void {
  }

}
