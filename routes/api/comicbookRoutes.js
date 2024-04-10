const router = require('express').Router();
//const sequelize = require('../../config/connection'); // connection to sequelize 
const { Comics, Shows, Movies } = require('../../models'); // pull in model

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

});

// :id represents parameter in route to to one book
router.get('/:id', async (req,res) => {
    try {// findByPk = find by primary key which we will get from the params in the route
        const book = await Comics.findByPk(req.params.id, {
            include: [{model: Shows}, {model: Movies}] // going to include all info for shows and movies 
        });

        // if no book id found
        if (!book) {
            res.status(404).json({ message: 'No book found with that id!' });
            return;
          };

        res.status(200).json({ message: 'a comic book' });
    } catch (err) {
        res.status(500).json(err)
    };

})

module.exports = router;