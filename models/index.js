const ComicBook = require('./ComicBooks');
const Movies = require('./Movies');
const TvShows = require('./TvShows');

ComicBook.hasMany(Movies, {
    foreignKey: 'comicBook_id',
    onDelete: 'CASCADE',
});

Movies.belongsTo(ComicBook, {
    foreignKey: 'comicBook_id'
});



ComicBook.hasMany(TvShows, {
    foreignKey: 'comicBook_id',
    onDelete: 'CASCADE',
});

TvShows.belongsTo(ComicBook, {
    foreignKey: 'comicBook_id'
});




module.exports = { ComicBook, Movies, TvShows };