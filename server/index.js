const express = require('express');
const parser = require('body-parser');
const app = express();
const port = 3002;
const db = require('../database/index.js');

app.use(parser.json());
app.use(parser.urlencoded({ extended: true}));
app.use(express.static(__dirname + '/../public'));


app.get('/', function(req, res) {
  console.log(req);
  res.send('hello');  
})




app.listen(port, function() {
  console.log('listening on port :', port);
});