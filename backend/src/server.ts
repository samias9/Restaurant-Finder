import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express, { Router } from "express";
import cors from "cors";
import { sample_restaurants, sample_tags } from './dataRestaurants';
import { sample_users } from './dataRestaurants';
import jwt from "jsonwebtoken";
import { Review } from '../../frontend/src/app/shared/models/Review';
import * as fs from 'fs';

const reviewsFilePath = path.join(__dirname, 'reviews.json');

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

app.post('/api/reviews', (req, res) => {
    try {
        const { restaurantId, nickname, mail, rating, text } = req.body;

        if (!restaurantId || !nickname || !mail || !rating || !text) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Read current reviews from the file
        const reviewsData = JSON.parse(fs.readFileSync(reviewsFilePath, 'utf-8'));

        const review: Review = {
            id: reviewsData.length + 1,
            restaurantId,
            nickname,
            mail,
            rating: parseFloat(rating),
            text,
        };

        // Add new review to the list and save back to the file
        reviewsData.push(review);
        fs.writeFileSync(reviewsFilePath, JSON.stringify(reviewsData, null, 2));

        res.status(201).json({ message: 'Review added successfully!', review });
    } catch (err) {
        console.error('Error adding review:', err);
        res.status(500).json({ message: 'Internal server error. Please try again.' });
    }
});

app.get('/api/reviews/:restaurantId', (req, res) => {
    const { restaurantId } = req.params;

    try {
        const reviewsData = JSON.parse(fs.readFileSync(reviewsFilePath, 'utf-8'));
        const restaurantReviews = reviewsData.filter((review: Review) => review.restaurantId === restaurantId);
        res.status(200).json(restaurantReviews);
    } catch (err) {
        console.error('Error fetching reviews:', err);
        res.status(500).json({ message: 'Internal server error. Please try again.' });
    }
});

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