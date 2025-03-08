import React, { useState } from "react";
import "./App.css";

// Sample recipe data
const recipes = [
  {
    name: "Grilled Salmon",
    chef: "Chef Emily",
    totalRatings: 350,
    avgRating: 4.0,
    uploadedOn: "2024-02-10",
    mealType: "Dinner",
    dishType: "Seafood",
    testKitchenApproved: false,
    contestWinner: true,
    featured: true,
    description: "Freshly grilled salmon with a tangy lemon butter sauce, served with vegetables.",
    imgUrl: "https://media.istockphoto.com/id/1214416414/photo/barbecued-salmon-fried-potatoes-and-vegetables-on-wooden-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=AgidLz6RYOwAgDjKVOfDQhR6ePaRIRR6fcIM5Fp9P0A="
  },
  {
    name: "Margherita Pizza",
    chef: "Chef Giovanni",
    totalRatings: 600,
    avgRating: 4.4,
    uploadedOn: "2024-03-05",
    mealType: "Lunch",
    dishType: "Pizza",
    testKitchenApproved: true,
    contestWinner: false,
    featured: true,
    description: "Classic Margherita pizza with fresh tomatoes, basil, and mozzarella cheese.",
    imgUrl: "https://images.unsplash.com/photo-1584365685547-9a5fb6f3a70c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE1hcmdoZXJpdGElMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Chicken Biryani",
    chef: "Chef Ayesha",
    totalRatings: 750,
    avgRating: 4.2,
    uploadedOn: "2024-01-20",
    mealType: "Dinner",
    dishType: "Curry",
    testKitchenApproved: true,
    contestWinner: true,
    featured: false,
    description: "Fragrant and spicy chicken biryani served with raita and salad.",
    imgUrl: "https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.webp?a=1&b=1&s=612x612&w=0&k=20&c=a8j_p9BkWtsSX7WkcqeetigH8PYWXGayIGto9GiehNY="
  },
  {
    name: "Avocado Smoothie",
    chef: "Chef Lucas",
    totalRatings: 250,
    avgRating: 4.0,
    uploadedOn: "2024-02-18",
    mealType: "Breakfast",
    dishType: "Smoothie",
    testKitchenApproved: false,
    contestWinner: false,
    featured: true,
    description: "A creamy and refreshing avocado smoothie with honey and almond milk.",
    imgUrl: "https://images.unsplash.com/photo-1604085792782-8d92f276d7d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEF2b2NhZG8lMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Clam Chowder",
    chef: "Chef Oliver",
    totalRatings: 480,
    avgRating: 4.0,
    uploadedOn: "2024-03-01",
    mealType: "Lunch",
    dishType: "Soup",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description: "A hearty New England clam chowder with potatoes, celery, and bacon.",
    imgUrl: "https://images.unsplash.com/photo-1593854823220-267730770d09?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2xhbSUyMENob3dkZXJ8ZW58MHx8MHx8fDA%3D"
  },
  {
    name: "Pancakes with Maple Syrup",
    chef: "Chef Sophie",
    totalRatings: 540,
    avgRating: 3.8,
    uploadedOn: "2024-01-25",
    mealType: "Breakfast",
    dishType: "Dessert",
    testKitchenApproved: false,
    contestWinner: true,
    featured: true,
    description: "Fluffy pancakes topped with maple syrup and fresh berries.",
    imgUrl: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuY2FrZXMlMjB3aXRoJTIwTWFwbGUlMjBTeXJ1cHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    name: "Beef Tacos",
    chef: "Chef Carlos",
    totalRatings: 670,
    avgRating: 3.7,
    uploadedOn: "2024-02-08",
    mealType: "Lunch",
    dishType: "Mexican",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description: "Delicious beef tacos served with fresh guacamole and salsa.",
    imgUrl: "https://media.istockphoto.com/id/1333647378/photo/homemade-american-soft-shell-beef-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=VlHsqxCFAxTsBujWRbEk30gRpEr8q5CGQVxar3OUb78="
  },
  {
    name: "Garlic Butter Shrimp",
    chef: "Chef Noah",
    totalRatings: 400,
    avgRating: 4.2,
    uploadedOn: "2024-03-12",
    mealType: "Dinner",
    dishType: "Seafood",
    testKitchenApproved: false,
    contestWinner: true,
    featured: true,
    description: "Juicy shrimp cooked in garlic butter sauce and served with rice.",
    imgUrl: "https://media.istockphoto.com/id/1414307299/photo/closeup-garlic-butter-shrimp-in-pan.webp?a=1&b=1&s=612x612&w=0&k=20&c=RcXKgoUJc1exWAGC-mPBCQY6IXVY1qxARs_8sP_zOGE="
  },
  {
    name: "Classic French Croissant",
    chef: "Chef Marie",
    totalRatings: 390,
    avgRating: 3.8,
    uploadedOn: "2024-01-29",
    mealType: "Breakfast",
    dishType: "Dessert",
    testKitchenApproved: true,
    contestWinner: false,
    featured: false,
    description: "Freshly baked buttery croissants with a flaky, golden crust.",
    imgUrl: "https://images.unsplash.com/photo-1529978215771-45f0bcc12de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2xhc3NpYyUyMEZyZW5jaCUyMENyb2lzc2FudHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
      name: "Avocado Toast",
      chef: "Chef Lisa",
      totalRatings: 320,
      avgRating: 3.6,
      uploadedOn: "2024-02-10",
      mealType: "Breakfast",
      dishType: "Toast",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A healthy and delicious toast topped with mashed avocado, poached egg, and seasoning.",
      imgUrl: "https://media.istockphoto.com/id/980285640/photo/healthy-avocado-and-egg-toasts-with-pumpkin-and-sesame-seeds-sprinkled-with-cress-salad.webp?a=1&b=1&s=612x612&w=0&k=20&c=UwUK5ETTQzF3YgLEchJJl04uVId4VkSofhk-81ZJGPY="
    },
    {
      name: "Mushroom Risotto",
      chef: "Chef Giovanni",
      totalRatings: 410,
      avgRating: 3.9,
      uploadedOn: "2024-03-05",
      mealType: "Dinner",
      dishType: "Risotto",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A creamy Italian rice dish with earthy mushrooms and Parmesan cheese.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1694850980439-61487c39be4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8TXVzaHJvb20lMjBSaXNvdHRvfGVufDB8fDB8fHww"
    },
    {
      name: "Grilled Chicken Salad",
      chef: "Chef Daniel",
      totalRatings: 290,
      avgRating: 4.5,
      uploadedOn: "2024-04-20",
      mealType: "Lunch",
      dishType: "Salad",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A fresh and healthy salad with grilled chicken, lettuce, cherry tomatoes, and balsamic dressing.",
      imgUrl: "https://media.istockphoto.com/id/155372562/photo/roasted-chicken-breast.webp?a=1&b=1&s=612x612&w=0&k=20&c=fjwuTW_m40NYVZrBHJG45BLq68D31b6fX1Ipna-nuBI="
    },
    {
      name: "Chocolate Lava Cake",
      chef: "Chef Sophia",
      totalRatings: 560,
      avgRating: 4.2,
      uploadedOn: "2024-01-30",
      mealType: "Dessert",
      dishType: "Cake",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "A rich and gooey chocolate cake with a molten lava center.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1723618822165-0b13c0471fc4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENob2NvbGF0ZSUyMExhdmElMjBDYWtlfGVufDB8fDB8fHww"
    },
    {
      name: "Tomato Basil Soup",
      chef: "Chef Emily",
      totalRatings: 270,
      avgRating: 4.0,
      uploadedOn: "2024-05-12",
      mealType: "Lunch",
      dishType: "Soup",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A warm and comforting tomato soup infused with fresh basil and served with croutons.",
      imgUrl: "https://images.unsplash.com/photo-1620418029653-f708dd37096a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8VG9tYXRvJTIwQmFzaWwlMjBTb3VwfGVufDB8fDB8fHww"
    },
    {
      name: "Egg Benedict",
      chef: "Chef Robert",
      totalRatings: 340,
      avgRating: 3.7,
      uploadedOn: "2024-02-28",
      mealType: "Breakfast",
      dishType: "Egg Dish",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Poached eggs served on an English muffin with creamy hollandaise sauce.",
      imgUrl: "https://images.unsplash.com/photo-1593584785033-9c7604d0863f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWdnJTIwQmVuZWRpY3R8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "BBQ Pulled Pork Sandwich",
      chef: "Chef Jake",
      totalRatings: 450,
      avgRating: 4.8,
      uploadedOn: "2024-03-18",
      mealType: "Lunch",
      dishType: "Sandwich",
      testKitchenApproved: true,
      contestWinner: true,
      featured: false,
      description: "A flavorful pulled pork sandwich with BBQ sauce and coleslaw.",
      imgUrl: "https://media.istockphoto.com/id/464848566/photo/barbeque-pulled-pork-sandwiches.webp?a=1&b=1&s=612x612&w=0&k=20&c=FkiSgCbOHHjlHp4A8UKB23J8zJtA_v7T5L0jvCGIO1I="
    },
    {
      name: "Butter Chicken",
      chef: "Chef Arjun",
      totalRatings: 600,
      avgRating: 5.0,
      uploadedOn: "2024-06-01",
      mealType: "Dinner",
      dishType: "Curry",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A rich and creamy Indian chicken curry cooked with butter and aromatic spices.",
      imgUrl: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QnV0dGVyJTIwQ2hpY2tlbnxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Shrimp Tacos",
      chef: "Chef Valeria",
      totalRatings: 390,
      avgRating: 4.7,
      uploadedOn: "2024-07-14",
      mealType: "Dinner",
      dishType: "Tacos",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "Soft corn tortillas filled with spicy grilled shrimp, avocado, and fresh salsa.",
      imgUrl: "https://media.istockphoto.com/id/542331706/photo/homemade-spicy-shrimp-tacos.webp?a=1&b=1&s=612x612&w=0&k=20&c=cBeCvYVLdaUxpDyFMOtttvU7EFQTO0wSHh2ZYdsnGW0="
    },
    {
      name: "Vegan Buddha Bowl",
      chef: "Chef Natalie",
      totalRatings: 280,
      avgRating: 4.6,
      uploadedOn: "2024-08-21",
      mealType: "Lunch",
      dishType: "Bowl",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A nutritious bowl filled with quinoa, roasted vegetables, avocado, and a tahini dressing.",
      imgUrl: "https://media.istockphoto.com/id/1309764724/photo/vegan-buddha-bowl-on-rustic-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=Vby5pz8xjB6GY8C-Ha07LEppn4gyJe5ZKeLFoMAMHmk="
    },
    {
      name: "Japanese Ramen",
      chef: "Chef Hiroshi",
      totalRatings: 510,
      avgRating: 4.9,
      uploadedOn: "2024-09-09",
      mealType: "Dinner",
      dishType: "Noodles",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "A flavorful Japanese noodle soup with a rich broth, soft-boiled egg, and sliced pork.",
      imgUrl: "https://media.istockphoto.com/id/1365977387/photo/ramen-with-steaming-sizzle.webp?a=1&b=1&s=612x612&w=0&k=20&c=7bmEYM6FaG7sOyrr3ZsQGreCyU_f_oOeXmHx6hGZlzY="
    },
    {
      name: "French Onion Soup",
      chef: "Chef Antoine",
      totalRatings: 310,
      avgRating: 4.7,
      uploadedOn: "2024-10-05",
      mealType: "Lunch",
      dishType: "Soup",
      testKitchenApproved: true,
      contestWinner: false,
      featured: false,
      description: "A rich and savory soup topped with melted cheese and crispy bread.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1727960325953-ef51e51d73f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlbmNoJTIwT25pb24lMjBTb3VwfGVufDB8fDB8fHww"
    },
    {
      name: "Paneer Butter Masala",
      chef: "Chef Rohan",
      totalRatings: 620,
      avgRating: 4.8,
      uploadedOn: "2024-02-15",
      mealType: "Lunch",
      dishType: "Curry",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Rich and creamy paneer butter masala served with naan or rice.",
      imgUrl: "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww"
    },
    {
      name: "Classic Margherita Pizza",
      chef: "Chef Luca",
      totalRatings: 850,
      avgRating: 4.9,
      uploadedOn: "2024-03-01",
      mealType: "Dinner",
      dishType: "Pizza",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "Thin crust pizza topped with fresh tomatoes, mozzarella, and basil.",
      imgUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2xhc3NpYyUyME1hcmdoZXJpdGElMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      name: "Spaghetti Carbonara",
      chef: "Chef Antonio",
      totalRatings: 730,
      avgRating: 4.7,
      uploadedOn: "2024-02-30",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Creamy spaghetti with pancetta, eggs, and parmesan cheese.",
      imgUrl: "https://i.ytimg.com/vi/iQ38VKAjQgo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBYeSca3xOzPVWec6G-I6XqaZ8z4Q"
    },
    {
      name: "Spaghetti Carbonara",
      chef: "Chef Antonio",
      totalRatings: 430,
      avgRating: 4.8,
      uploadedOn: "2024-02-10",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Pasta is a versatile Italian dish made from wheat flour and water, enjoyed in various shapes and sauces.",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjdP7Ur_1P-4UtjB8ujTLtBz-ZsWQZgu1emg&s"
    },
    {
      name: "Spaghetti Carbonara",
      chef: "Chef Sophia",
      totalRatings: 987,
      avgRating: 4.9,
      uploadedOn: "2024-02-12",
      mealType: "Dinner",
      dishType: "Pasta",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "A staple of Italian cuisine, pasta pairs perfectly with rich sauces, meats, and vegetables for a delicious meal.",
      imgUrl: "https://www.indianhealthyrecipes.com/wp-content/uploads/2019/05/masala-pasta-480x270.jpg"
    },
    {
      name: "Blueberry Pancakes",
      chef: "Chef Sophia",
      totalRatings: 540,
      avgRating: 4.6,
      uploadedOn: "2024-01-25",
      mealType: "Breakfast",
      dishType: "Dessert",
      testKitchenApproved: false,
      contestWinner: true,
      featured: false,
      description: "Fluffy pancakes filled with juicy blueberries and maple syrup.",
      imgUrl: "https://media.istockphoto.com/id/161170090/photo/pancakes-with-berries-and-maple-syrup.webp?a=1&b=1&s=612x612&w=0&k=20&c=vLBnyfpcHHA07gEXKkai5FAKad3vD0ugmNwOLhhFpZc="
    },
    {
      name: "Caesar Salad",
      chef: "Chef Olivia",
      totalRatings: 480,
      avgRating: 4.5,
      uploadedOn: "2024-03-05",
      mealType: "Lunch",
      dishType: "Salad",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Crisp romaine lettuce, parmesan, croutons, and creamy Caesar dressing.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1692309186600-03bb12fd3adb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2Flc2FyJTIwU2FsYWR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Mango Lassi",
      chef: "Chef Arjun",
      totalRatings: 390,
      avgRating: 4.7,
      uploadedOn: "2024-02-28",
      mealType: "Beverage",
      dishType: "Drink",
      testKitchenApproved: false,
      contestWinner: false,
      featured: true,
      description: "Refreshing mango and yogurt drink with a hint of cardamom.",
      imgUrl: "https://media.istockphoto.com/id/980036596/photo/mango-lassi-indian-popular-summer-drink-in-a-terracotta-glass-selective-focus.webp?a=1&b=1&s=612x612&w=0&k=20&c=fXHHJnj4kXIivOTJXI5477IPKeYNegtXeNBqXpGv3Hk="
    },
    {
      name: "Butter Garlic Naan",
      chef: "Chef Ramesh",
      totalRatings: 510,
      avgRating: 4.8,
      uploadedOn: "2024-02-12",
      mealType: "Dinner",
      dishType: "Bread",
      testKitchenApproved: true,
      contestWinner: true,
      featured: true,
      description: "Soft and fluffy naan brushed with butter and garlic.",
      imgUrl: "https://media.istockphoto.com/id/1140752821/photo/indian-naan-bread-with-garlic-butter-on-wooden-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=lOeYboRNvwONnykKUu7lN-UQg5c0cl0CKfDFiVFfhBk="
    },
    {
      name: "Chocolate Brownie",
      chef: "Chef Emily",
      totalRatings: 670,
      avgRating: 4.9,
      uploadedOn: "2024-01-30",
      mealType: "Dessert",
      dishType: "Sweet",
      testKitchenApproved: false,
      contestWinner: true,
      featured: false,
      description: "Fudgy chocolate brownies topped with walnuts and chocolate chips.",
      imgUrl: "https://images.unsplash.com/photo-1610611424854-5e07032143d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENob2NvbGF0ZSUyMEJyb3duaWV8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Sushi Rolls",
      chef: "Chef Hiroshi",
      totalRatings: 890,
      avgRating: 4.8,
      uploadedOn: "2024-03-08",
      mealType: "Lunch",
      dishType: "Seafood",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Fresh sushi rolls with salmon, avocado, and rice wrapped in seaweed.",
      imgUrl: "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFN1c2hpJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Grilled Chicken Sandwich",
      chef: "Chef Daniel",
      totalRatings: 750,
      avgRating: 4.8,
      uploadedOn: "2024-03-02",
      mealType: "Lunch",
      dishType: "Sandwich",
      testKitchenApproved: false,
      contestWinner: true,
      featured: false,
      description: "Juicy grilled chicken with lettuce, tomato, and mayo in a toasted bun.",
      imgUrl: "https://media.istockphoto.com/id/1221237754/photo/two-halves-of-club-sandwich-on-white.webp?a=1&b=1&s=612x612&w=0&k=20&c=Ew9XWnhJxXj_dhcL0pU5cERORa7BmwB7b86XogLPgqM="
    },
    {
      name: "Strawberry Cheesecake",
      chef: "Chef Mia",
      totalRatings: 830,
      avgRating: 4.9,
      uploadedOn: "2024-01-28",
      mealType: "Dessert",
      dishType: "Cake",
      testKitchenApproved: true,
      contestWinner: false,
      featured: true,
      description: "Creamy strawberry cheesecake with a buttery biscuit base.",
      imgUrl: "https://plus.unsplash.com/premium_photo-1672192166851-71d218e64544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RyYXdiZXJyeSUyMENoZWVzZWNha2V8ZW58MHx8MHx8fDA%3D"
    }
  ];

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    mealType: [],
    dishType: [],
    attributes: [],
  });
  const [sortOption, setSortOption] = useState("");

  // Handle search input
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle filter selection
  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: prevFilters[type].includes(value)
        ? prevFilters[type].filter((item) => item !== value)
        : [...prevFilters[type], value],
    }));
  };

  // Clear all filters
  const clearFilters = () => {
    setFilters({
      mealType: [],
      dishType: [],
      attributes: [],
    });
  };

  // Filter and sort recipes
  const filteredRecipes = recipes
    .filter((recipe) => {
      const matchesSearch =
        recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.chef.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesMealType =
        filters.mealType.length === 0 || filters.mealType.includes(recipe.mealType);
      const matchesDishType =
        filters.dishType.length === 0 || filters.dishType.includes(recipe.dishType);
      const matchesAttributes =
        filters.attributes.length === 0 ||
        filters.attributes.every((attr) => recipe[attr]);

      return matchesSearch && matchesMealType && matchesDishType && matchesAttributes;
    })
    .sort((a, b) => {
      if (sortOption === "newest") {
        return new Date(b.uploadedOn) - new Date(a.uploadedOn);
      } else if (sortOption === "oldest") {
        return new Date(a.uploadedOn) - new Date(b.uploadedOn);
      } else if (sortOption === "highestRating") {
        return b.avgRating - a.avgRating;
      } else if (sortOption === "lowestRating") {
        return a.avgRating - b.avgRating;
      } else {
        return 0;
      }
    });

  return (
    <div className="container">
      {/* Filter Sidebar */}
      <div className="sidebar">
        <h2>Filters</h2>
        <button onClick={clearFilters}>Clear All</button>

        <h3>Meal Type</h3>
        {["Breakfast", "Lunch", "Dinner"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filters.mealType.includes(type)}
              onChange={() => handleFilterChange("mealType", type)}
            />
            {type}
          </label>
        ))}

        <h3>Dish Type</h3>
        {["Pasta", "Curry", "Dessert"].map((type) => (
          <label key={type}>
            <input
              type="checkbox"
              checked={filters.dishType.includes(type)}
              onChange={() => handleFilterChange("dishType", type)}
            />
            {type}
          </label>
        ))}

        <h3>Attributes</h3>
        {["Test Kitchen Approved", "Contest Winner", "Featured"].map((attr) => (
          <label key={attr}>
            <input
              type="checkbox"
              checked={filters.attributes.includes(attr.replace(/ /g, "").toLowerCase())}
              onChange={() =>
                handleFilterChange("attributes", attr.replace(/ /g, "").toLowerCase())
              }
            />
            {attr}
          </label>
        ))}
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchQuery}
            onChange={handleSearch}
          />
          <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
            <option value="">Sort By</option>
            <option value="newest">Upload Date - Newest</option>
            <option value="oldest">Upload Date - Oldest</option>
            <option value="highestRating">Average Rating - Highest</option>
            <option value="lowestRating">Average Rating - Lowest</option>
          </select>
        </div>

        {/* Recipe Cards */}
        <div className="recipe-grid">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.name} className="recipe-card">
              <img src={recipe.imgUrl} alt={recipe.name} />
              <h3>{recipe.name}</h3>
              <p>By {recipe.chef}</p>
              <p>{recipe.description}</p>
              <p className="rating">⭐ {recipe.avgRating} ({recipe.totalRatings} reviews)</p>
              <p>Uploaded on: {recipe.uploadedOn}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;