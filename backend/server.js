const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

//Require the routes
const directorsRouter = require('./routes/directors');
const moviesRouter = require('./routes/movies');
const homeRouter = require('./routes/home');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'public')));

//Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/moviefyDB').then(() => {
console.log("Connected to MongoDB!");
}).catch((err) => {
console.log("Not Connected to MongoDB! ", err);
});

app.use(cors());
app.use(express.json());

//Use the routes
app.use('/directors', directorsRouter);
app.use('/movies', moviesRouter);
app.use('/', homeRouter);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});