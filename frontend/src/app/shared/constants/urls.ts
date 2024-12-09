import { environment } from "src/environments/environment";

const BASE_URL = environment.production? '' : 'http://localhost:5003';

export const RESTAURANTS_URL = BASE_URL + '/api/restaurants';
export const RESTAURANTS_TAGS_URL = RESTAURANTS_URL + '/tags';
export const RESTAURANTS_BY_SEARCH_URL = RESTAURANTS_URL + '/search/';
export const RESTAURANTS_BY_TAG_URL = RESTAURANTS_URL + '/tag/';
export const RESTAURANT_BY_ID_URL = RESTAURANTS_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';



