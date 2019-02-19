const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cors = require('cors');

require('dotenv').config();

const port = process.env.PORT || 4000;
app = express();

// app.use(cors());

const mongodb = process.env.MONGOLAB_URI;

mongoose.connect(mongodb, { useNewUrlParser: true});
mongoose.Promise = global.Promise;

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



const cards = require('./routes/flashcard');
app.use('/', cards);

app.listen(port, () => {
  console.log('Server is up and running on port number ' + port);
});



