import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service'; //to get the food based on the food id
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { ActivatedRoute, Router } from '@angular/router'; //to read the food id from the route params 

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.css']
})
export class RestaurantPageComponent implements OnInit{
  restaurant!: Restaurant;
  constructor(activatedRoute:ActivatedRoute, restaurantService:RestaurantService, 
    private router:Router){
    activatedRoute.params.subscribe((params) => { //listening to the params
      if(params.id)
        restaurantService.getRestaurantById(params.id).subscribe(serverRestaurant =>  {
          this.restaurant = serverRestaurant;
        });
      })
}
ngOnInit(): void {
}
}