const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)
const db = mongoose.connect('mongodb://localhost/reviews');



module.exports = db;