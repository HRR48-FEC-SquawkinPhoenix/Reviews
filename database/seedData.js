const db = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

const fakeData = []

let generateFakeData = () => {
  let count = 100;
  let singleReview = {};
  while (count >= 1) {
    singleReview.author = faker.name.FindName();
    singleReview.purchaseItem = faker.commerce.productName();
    singleReview.imageUrl = faker.image.imageUrl();
    singleReview.reviewBody = faker.hacker.phrase();
    singleReview.helpful = Math.floor(Math.random() * 500);
    singleReview.stars = Math.floor(Math.random() * 6);
    singleReview.date = faker.date.past();
    fakeData.push(singleReview);
    count--;
  }  
};




const insertSeedData = () => {
  generateFakeData();
  Review.create(fakeData)
    .then(() => db.disconnect());
}

insertSeedData();
