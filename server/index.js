const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 3002;
const db = require('../database/index.js');
const axios = require('axios');
const Review = require('../database/Review.js')

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../public'));


app.get('/', function(req, res) {
  console.log(req);
  res.send('hello');  
})

app.get('/api/allReviews', function(req, res) {
  Review.find({}).then((results) => {res.json(results)}).catch((error) => {console.log(error)});
})


  


app.listen(port, function() {
  console.log('listening on port :', port);
});