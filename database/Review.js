const mongoose = require('mongoose');
const db = require('./index.js');
// mongoose.Promise = global.Promise;



const reviewSchema = new mongoose.Schema ({
  authorPhoto: String,
  author: String,
  purchasedItem: String,
  purchasedItemId: Number,
  itemDescription: {type: String, default: ''},
  imageUrl: {type: String, default: 'https://via.placeholder.com/150/FFFFFF/FFFFFF'},    
  reviewBody: {type: String, default: ''},
  helpful: {type: Number, default: 0},
  stars: Number,
  date: {type: Date, default: Date.now}
})


const Review = mongoose.model('Review', reviewSchema);


module.exports = Review;

