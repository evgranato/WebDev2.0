const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connection Open!!!")
    })
    .catch( err => {
        console.log("ERRRROOOOOORRRR!!!!!")
        console.log(err)
    })

const {scchema} = mongoose;

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

const Movie = mongoose.model("Movie", movieSchema);
// Mongoose will make a collection called "movies"

Movie.insertMany([
    {title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
    {title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
    {title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
    {title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
    {title: 'Moonrise Kingdom', year: 2012, score: 7.3, rating: 'PG-13'}
])
.then(() => {
    console.log("Uploaded")
})
.catch( err => {
    console.log("Something Went Wrong")
    console.log(err)
})
