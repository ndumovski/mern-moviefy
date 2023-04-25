const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const directorsRouter = require('./routes/directors');
const moviesRouter = require('./routes/movies');

const app = express();
const port = process.env.PORT || 5000;


// Serve static files from the React app
//change the url to the frontend build folder

app.use(express.static(path.join(__dirname, 'public')));



//Connecting to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/moviefy').then(() => {
console.log("Connected to MongoDB!");
}).catch((err) => {
console.log("Not Connected to MongoDB! ", err);
});

app.use(cors());
app.use(express.json());

app.use('/directors', directorsRouter);
app.use('/movies', moviesRouter);


app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});