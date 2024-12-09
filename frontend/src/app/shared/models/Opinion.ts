import { Restaurant } from "./Restaurant";

export class Opinion{
    constructor(public restaurant:Restaurant){ 
    }
    nom: string = this.restaurant.name;
}