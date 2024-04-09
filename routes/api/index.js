const router = require('express').Router();
const comicbookRoutes = require('./comicbookRoutes');
const movieRoutes = require('./movieRoutes');
const tvShowRoutes = require('./tvShowRoutes');

router.use('/books', comicbookRoutes);
router.use('/movies', movieRoutes);
router.use('/shows', tvShowRoutes);


module.exports = router;