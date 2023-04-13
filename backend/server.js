const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


const directorsRouter = require('./routes/directors');
const moviesRouter = require('./routes/movies');

const app = express();
const port = process.env.PORT || 5000;

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

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});