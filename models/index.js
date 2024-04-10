const Comics = require('./ComicBooks');
const Movies = require('./Movies');
const Shows = require('./TvShows');

//creating relationship between "tables"
Comics.hasMany(Movies, {
    foreignKey: 'comicbook_id',
    onDelete: 'CASCADE',
});

Movies.belongsTo(Comics, {
    foreignKey: 'comicbook_id'
});



Comics.hasMany(Shows, {
    foreignKey: 'comicbook_id',
    onDelete: 'CASCADE',
});

Shows.belongsTo(Comics, {
    foreignKey: 'comicbook_id'
});




module.exports = { Comics, Shows, Movies };