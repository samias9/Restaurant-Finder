export const sample_restaurants: any[] = [
  {
    id: '1',
    name: 'Chez Georges',
    imageUrl: 'assets/food-1.jpg',
    description: 'A classic bistro offering French-inspired cuisine and a warm atmosphere.',
    contact: '418-123-4567',
    latitude: 48.4284,
    stars: 4.7,
    longitude: -71.0580,
    tags: ['Burger', 'Pizza', 'Lunch'],
    reviews: [
      {
        id: 1,
        text: 'Delicious food and great service. A must-visit!',
        rating: 5,
        mail: 'john.doe@example.com',
        nickname: 'JohnD',
        restaurantId: '1'
      },
      {
        id: 2,
        text: 'A bit pricey, but worth it for the quality.',
        rating: 4,
        mail: 'jane.smith@example.com',
        nickname: 'JaneS',
        restaurantId: '1'
      }
    ]
  },
  {
    id: '2',
    name: 'Le Café Cambio',
    imageUrl: 'assets/food-2.jpg',
    description: 'Cozy café with fair-trade coffee, vegetarian options, and local art displays.',
    contact: '418-234-5678',
    latitude: 48.4280,
    stars: 4.7,
    longitude: -71.0670,
    tags: ['FastFood', 'Pizza', 'Lunch'],
    reviews: [
      {
        id: 3,
        text: 'The coffee is amazing, and the ambiance is perfect for relaxing.',
        rating: 5,
        mail: 'coffee.lover@example.com',
        nickname: 'CaffeineAddict',
        restaurantId: '2'
      },
      {
        id: 4,
        text: 'Great place to hang out, but a bit noisy during peak hours.',
        rating: 4,
        mail: 'peaceful.soul@example.com',
        nickname: 'QuietOne',
        restaurantId: '2'
      }
    ]
  },
  {
    id: '3',
    name: 'Restaurant La Cuisine',
    imageUrl: 'assets/food-3.jpg',
    description: 'Fine dining with an emphasis on local ingredients and innovative dishes.',
    contact: '418-345-6789',
    latitude: 48.4292,
    stars: 4.7,
    longitude: -71.0640,
    reviews: [
      {
        id: 5,
        text: 'Fantastic flavors and impeccable presentation.',
        rating: 5,
        mail: 'foodie@example.com',
        nickname: 'GourmetLover',
        restaurantId: '3'
      },
      {
        id: 6,
        text: 'Exceptional service and a great selection of wines.',
        rating: 5,
        mail: 'wine.enthusiast@example.com',
        nickname: 'WineLover',
        restaurantId: '3'
      }
    ]
  },
  {
    id: '4',
    name: 'La Voie Maltée',
    imageUrl: 'assets/food-4.jpg',
    description: 'A microbrewery offering a variety of craft beers and hearty pub food.',
    contact: '418-456-7890',
    latitude: 48.4278,
    stars: 4.7,
    longitude: -71.0555,
    tags: ['FastFood', 'Pizza', 'Lunch'],
    reviews: [
      {
        id: 7,
        text: 'The beers are amazing, and the burgers are to die for!',
        rating: 5,
        mail: 'beer.fan@example.com',
        nickname: 'HopsHunter',
        restaurantId: '4'
      },
      {
        id: 8,
        text: 'Great vibe, but the food took a bit too long to arrive.',
        rating: 4,
        mail: 'foodcritic@example.com',
        nickname: 'ImpatientEater',
        restaurantId: '4'
      }
    ]
  },
  {
    id: '5',
    name: 'Le Bergerac',
    imageUrl: 'assets/food-5.jpg',
    description: 'Upscale restaurant with a refined menu and elegant décor.',
    contact: '418-567-8901',
    latitude: 48.4265,
    stars: 4.7,
    longitude: -71.0630,
    tags: ['FastFood', 'Pizza', 'Lunch'],
    reviews: [
      {
        id: 9,
        text: 'An exquisite experience from start to finish.',
        rating: 5,
        mail: 'high.class@example.com',
        nickname: 'LuxuryDiner',
        restaurantId: '5'
      },
      {
        id: 10,
        text: 'Amazing ambiance, but I found the portions a bit small.',
        rating: 4,
        mail: 'portion.size@example.com',
        nickname: 'BigEater',
        restaurantId: '5'
      }
    ]
  }
]

export const sample_tags:any[] = [
    { name: 'All', count: 6 },
    { name: 'FastFood', count: 4 },
    { name: 'Pizza', count: 2 },
    { name: 'Lunch', count: 3 },
    { name: 'SlowFood', count: 2 },
    { name: 'Hamburger', count: 1 },
    { name: 'Fry', count: 1 },
    { name: 'Soup', count: 1 },
    {name: 'Burger', count:1}
  ]

  export const sample_users: any[] = [
    {
      name: 'John Doe',
      email: 'john@gmail.com',
      password: '12345',
      address: 'Toronto On',
      isAdmin: true,
    },
    {
      name: 'Jane Doe',
      email: 'Jane@gmail.com',
      password: '12345',
      address: 'Shanghai',
      isAdmin: false,
    },
  ];

