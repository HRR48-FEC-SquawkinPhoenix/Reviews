const db = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

const fakeData = []


let generateFakeData = () => {  
  let singleReview = {};  
  singleReview.author = faker.name.findName();
  singleReview.purchaseItem = faker.commerce.productName();
  singleReview.imageUrl = faker.image.imageUrl();
  singleReview.reviewBody = faker.hacker.phrase();
  singleReview.helpful = Math.floor(Math.random() * 500);
  singleReview.stars = Math.floor(Math.random() * 6);
  singleReview.date = faker.date.past();
  fakeData.push(singleReview);    
};

for(let i = 0; i < 100; i++) {
  generateFakeData()
}




const insertSeedData = () => {  
  Review.create(fakeData)
    .then(() => db.disconnect());
}

insertSeedData();