const router = require('express').Router();
//const sequelize = require('../../config/connection'); // connection to sequelize 
const { Comics } = require('../../models'); // pull in model

// api/books
// going to fetch data so it is going to return a promise
// using async and await to create nonblocking code and run aschroconosly
router.get('/', async (req,res) => {
    // wrap in try catch to help error handling
    try {
        const allBooks = await Comics.findAll({});
        res.status(200).json({ message: 'all comic books' });
    } catch (err) {
        res.status(500).json(err)
    };

})

module.exports = router;