const router = require('express').Router();
//const sequelize = require('../../config/connection'); // connection to sequelize 
const { Movies } = require('../../models'); // pull in model

// api/movies
// going to fetch data so it is going to return a promise
// using async and await to create nonblocking code and run aschroconosly
router.get('/', async (req,res) => {
    // wrap in try catch to help error handling
    try {
        const allMovies= await Movies.findAll({});
        res.status(200).json({ message: 'all movies' });
    } catch (err) {
        res.status(500).json(err)
    };

})

module.exports = router;