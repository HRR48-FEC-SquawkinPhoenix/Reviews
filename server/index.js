const express = require('express');
const parser = require('body-parser');
const app = express();
const cors = require('cors');
const port = 3002;
const db = require('../database/index.js');
const axios = require('axios');
const Review = require('../database/Review.js')
const component = require('./template.js');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../public'));

app.get('/:itemId', function (req, res) {
  res.send(component);
})


app.get('/allReviews/reviews', function(req, res) {
  Review.find({}).then((results) => {res.json(results)}).catch((error) => {console.log(error)});
})

app.get('/allReviews/:reviewId', function (req, res) {    
  let id = req.params.reviewId;  
  Review.find({purchasedItemId: id})
    .then((results) => {
      res.json(results)
    })
    .catch(err => {
      console.error(err);
    })
})


app.listen(port, function() {
  console.log('listening on port :', port);
});


module.exports = app;