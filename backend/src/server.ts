import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from "express";
import cors from "cors";
//import userRouter from './routers/user.router';
import { sample_restaurants, sample_tags } from './dataRestaurants';
import { sample_users } from './dataRestaurants';
import jwt from "jsonwebtoken";

//import { dbConnect } from './configs/database.config';
//dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.get("/api/restaurants", (req, res) => {
    res.send(sample_restaurants);
})
app.get("/api/restaurants/search/:searchTerm", (req, res)=> {
    const searchTerm = req.params.searchTerm;
    const restaurants = sample_restaurants.filter(restaurant => restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) );
    res.send(restaurants)
})

app.get("/api/restaurants/tags", (req, res) => {
    res.send(sample_tags);
})

app.get("/api/restaurants/tag/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const restaurants = sample_restaurants.filter(restaurant => restaurant.tags?.includes(tagName));
    res.send(restaurants);
})

app.get("/api/restaurants/:restaurantId", (req, res) => {
    const restaurantId = req.params.restaurantId;
    const restaurant = sample_restaurants.find(restaurant => restaurant.id == restaurantId);
    res.send(restaurant);
})

app.post("/api/users/login", (req, res) => {
    const {email, password} = req.body;
    const user = sample_users.find( user => user.email === email &&
        user.password === password
    );

    if (user){
        res.send(generateTokenResponse(user));
    }
    else{
        res.status(400).send("User name or password is not valid :(")
    }
})

const generateTokenResponse = (user:any )=>{
    const token = jwt.sign({
        email:user.email, isAdmin:user.isAdmin
    }, "SomeRandomText",{
        expiresIn: "30d"
    });

    user.token = token;
    return user;
}
const port = process.env.PORT || 5003;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})