const db = require('./index.js');
const Review = require('./Review.js');
const faker = require('faker');

const fakeData = []


let generateFakeData = () => {  
  let singleReview = {};  
  singleReview.authorPhoto = faker.image.imageUrl();
  singleReview.author = faker.name.findName();
  singleReview.purchasedItem = faker.commerce.productName();
  singleReview.purchasedItemId = Math.floor(Math.random() * 100);
  singleReview.itemDescription = 'Size: M';
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


let scottReview ={};
scottReview.authorPhoto = 'https://reviewsimages.s3-us-west-1.amazonaws.com/1B63B728-BF7D-4DCB-9FBB-14B3F3A7E174_1_201_a.jpeg';
scottReview.author = 'Scott Mounce';
scottReview.purchasedItem = 'Pumpkin pie cat and small pet hat felt costume';
scottReview.purchasedItemId = 1;
scottReview.itemDescription = 'Size: L';
scottReview.imageUrl = 'https://reviewsimages.s3-us-west-1.amazonaws.com/iap_640x640.1379127872_gjjhsg7s.jpg';
scottReview.reviewBody = 'It\'s not edible';
scottReview.helpful = 0;
scottReview.stars = 1;
scottReview.date = faker.date.past();  
fakeData.push(scottReview);

let stuReview = {};
stuReview.authorPhoto = 'https://reviewsimages.s3-us-west-1.amazonaws.com/T0455847Q-U018Z89D482-9096de5d95ec-512.jpg';  
stuReview.author = 'Stu Hanford';
stuReview.purchasedItem = 'Pumpkin pie cat and small pet hat felt costume';
stuReview.purchasedItemId = 1;
stuReview.itemDescription = 'Size M';
stuReview.imageUrl = 'https://reviewsimages.s3-us-west-1.amazonaws.com/iap_640x640.2091275525_8rdns9rg.jpg';
stuReview.reviewBody = 'This is the cutest thing I have ever seen. I bought 16 of them, one for each of my cats.';
stuReview.helpful = 0;
stuReview.stars = 5;
stuReview.date = faker.date.past();
fakeData.push(stuReview);

let yousifReview = {}
yousifReview.authorPhoto = 'https://reviewsimages.s3-us-west-1.amazonaws.com/T0455847Q-U019BSSBABB-59929f86550b-512.jpg';  
yousifReview.author = 'Yousif Faraj';
yousifReview.purchasedItem = 'Pumpkin pie cat and small pet hat felt costume';
yousifReview.purchasedItemId = 1;
yousifReview.itemDescription = 'Size L';
yousifReview.reviewBody = 'My Husky hates this';
yousifReview.helpful = 0;
yousifReview.stars = 1;
yousifReview.date = faker.date.past();
fakeData.push(yousifReview);

let tzReview = {}
tzReview.authorPhoto = 'https://reviewsimages.s3-us-west-1.amazonaws.com/T0455847Q-U019P3LG872-67854c8ecc27-512.jpg';
tzReview.author = 'TZ Liu';
tzReview.purchasedItem = 'Pumpkin pie cat and small pet hat felt costume';
tzReview.purchasedItemId = 1;
tzReview.itemDescription = 'Size S';
tzReview.imageUrl = 'https://reviewsimages.s3-us-west-1.amazonaws.com/iap_640x640.2097830162_4quij7sp.jpg';
tzReview.reviewBody = 'Nice costume, but my makeup is better!';
tzReview.helpful = 0;
tzReview.stars = 4;
tzReview.date = faker.date.past();
fakeData.push(tzReview);





const insertSeedData = () => {  
  Review.create(fakeData)
    .then((results) => {console.log(results)})
    .catch((error) => {console.error(error)})
    
}

insertSeedData();
