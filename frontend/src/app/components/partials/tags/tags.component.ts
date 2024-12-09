import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  tags?:Tag[];
  constructor(restaurantService:RestaurantService) {
    restaurantService.getAllTags().subscribe(serverTags => {
      this.tags = serverTags;
    });
    }

  ngOnInit(): void {
  }

}

