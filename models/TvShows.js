const { Model, DataTypes } = require('sequelize'); // object destructuring to pull in model and datatypes
const sequelize = require('../config/connection'); // pull in connection to sequelize 

class Shows extends Model{} // Model is parent class, TvShows is the child class

// initialize class
// sequelize ORM, object relational mapping

// Define a Sequelize model representing a table
Shows.init(
    {
    // Define attributes (columns) for the model
      // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        director: {
            type: DataTypes.STRING,
            allowNull: false
        },
        releaseDate: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        episodes: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        comicbook_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'comics', // points to the ComicBook model
                key: 'id', // where the key is equal to the id column
            },
        },
        info: {
            type: DataTypes.VIRTUAL(DataTypes.STRING, ['title', 'director', 'releaseDate', 'episodes' ]),
            get() {
                return `${this.getDataValue('title')} was directed by:${this.getDataValue('director')} and was released on ${this.getDataValue('releaseDate')}, with a total of ${this.getDataValue('episodes')}`
            }
        }
    },
    {
        sequelize, // Link to database connection
        timestamps: false, // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true, // Prevent sequelize from renaming the table
        underscored: true, // converts isPaperback to is_paperback (snake case) in our tables 
        modelName: 'shows'
    }
);

module.exports = Shows;