const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001; 

//Express middleware: express.json() = to parse JSON data from incoming requests and make it available in req.body for further processing in your routes.
app.use(express.json());
// middleware parses incoming request bodies that are URL-encoded
app.use(express.urlencoded({ extended: true }));

// turn on routes
app.use(routes);

// turn on connection to db and server
// ** make sure to create your database first in mysql
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});

// { force: false } to sequelize.sync(), it means that Sequelize will not drop any tables or make any modifications to the existing tables in the database schema. 
//Instead, it will only create tables for any models that do not yet exist in the database.
// false is typically safer in production environments because it preserves existing data in the database

// {force: true } Sequelize will drop all existing tables from the database and re-create them based on the model definitions. 
//This essentially resets the database schema every time the application starts.