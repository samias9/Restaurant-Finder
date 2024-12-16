import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../shared/models/Restaurant';
import { Tag } from '../shared/models/Tag';
import { sample_restaurants } from 'src/dataRestaurants';
import { RESTAURANT_BY_ID_URL, RESTAURANTS_BY_SEARCH_URL, RESTAURANTS_BY_TAG_URL, RESTAURANTS_TAGS_URL, RESTAURANTS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(RESTAURANTS_URL);
  }
  getAllRestaurantsBySearchTerm(searchTerm: string) {
    return this.http.get<Restaurant[]>(RESTAURANTS_BY_SEARCH_URL + searchTerm);
}
    
  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(RESTAURANTS_TAGS_URL);
  }
  getAllRestaurantsByTag(tag: string): Observable<Restaurant[]> {
    return tag === "All" ? 
    this.getAll() :
    this.http.get<Restaurant[]>(RESTAURANTS_BY_TAG_URL + tag);
  }
  getRestaurantById(restaurantId:string):Observable<Restaurant>{
    return this.http.get<Restaurant>(RESTAURANT_BY_ID_URL + restaurantId);
  }
}
