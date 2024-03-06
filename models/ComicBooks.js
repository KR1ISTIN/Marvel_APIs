const { Model, DataTypes } = require('sequelize'); // object destructuring to pull in model and datatypes
const sequelize = require('../config/connection'); // pull in connection to sequelize 

class ComicBook extends Model{} // Model is parent class, ComicBook is the child class

// initialize class
// sequelize ORM, object relational mapping

// Define a Sequelize model representing a table
ComicBook.init(
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
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        published: {
            type: DataTypes.DATEONLY,
            allowNull: true
        },
        isbn: {
            type: DataTypes.STRING
          },
        pages: {
            type: DataTypes.INTEGER
          },
        edition: {
            type: DataTypes.INTEGER
          },
        // Will become `is_paperback` in table due to `underscored` flag
        is_paperback: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        has_movie: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
        has_show: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        },
    },
    {
        sequelize, // Link to database connection
        timestamps: false, // Set to false to remove `created_at` and `updated_at` fields
        freezeTableName: true, // Prevent sequelize from renaming the table
        underscored: true, // converts isPaperback to is_paperback (snake case) in our tables 
        modelName: 'comicbooks'
    }
);

module.exports = ComicBook;
// personal note >> using the ComicBook as the main model since all movies or tv shows are based off comic books 