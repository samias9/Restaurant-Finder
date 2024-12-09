import {Review} from './Review';

export class Restaurant{
    id!: string;
    name!: string;
    imageUrl!:string;
    description!: string;
    contact!: string;
    latitude!: number;
    longitude!: number;
    reviews!: Review[];
    stars!: number;
    tags?: string[];
  }