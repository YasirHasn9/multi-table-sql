This Project is for the backend where i discuss the
the:
Foreign keys
SQL joins
Aggregate functions
Knex joins
Database access functions

1. start the project with npm init -y so you can get the package.json file
   -- by getting this file , you will be able to use the npm packages

2) install the knex http://knexjs.org/
   \$ npm install knex --save
   knex helps to build sql queries using js

3) install sqlite 3
   \$ npm install knex --save
   sqlite is a dbms

4. create a knexfile by using the command key that provided by knex
   npx knex init
   once you run this key , knexfile.js will be add to your root file
   delete everything and use this
   module.exports = {
   development: {
   client: "sqlite3",
   useNullAsDefault: true,
   connection: {
   filename: "./data/blog.db3"
   },
   migrations: {
   directory: "./data/migrations"
   },
   seeds: {
   directory: "./data/seeds"
   },
   // needed when using foreign keys
   pool: {
   afterCreate: (conn, done) => {
   // runs after a connection is made to the sqlite engine
   conn.run("PRAGMA foreign_keys = ON", done); // turn on FK enforcement
   }
   }
   }
   };

5. create .gitignore file and include all the files that you want to not push to your productions , github

6) create a new folder called data
7) run npx knex migrate:make the nameFile
   once you run it , a folder called migrations added to the data folder  
   migrations has one file start with number because the order is important when making a
   table

8) inside the file inside the migrations folder you can make your table

now go the DB browser for sqlite and make that have the tables you created

9. install express so you can run the server
   10.install helmet , npm install helmet --save useful for the header http

   11.install npm install --save-dev nodemon
   nodemon will run you server on every change , useful for the development environment

10. import the db base in the user-router and then make your first request
    -- you will get an empty array because we have 0 user

11. create a new request using post to create a new user
