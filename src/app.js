const express = require('express'); // common js
const configViewEngine = require('./config/viewEngine'); // common js
require('dotenv').config(); //config env
const app = express(); // app express
const route = require("./routes/web"); // routes
const port = process.env.PORT || 3333; // port
const hostname = process.env.HOSTNAME; // hostname
const connection = require('./config/database');

// Create the connection to database





// A simple SELECT query
    connection.query(
      'SELECT * from Users u',
      function(err, results, fields) {
        console.log(">>>results= ", results); // results contains rows returned by server
        console.log(">>>fields= ", fields); // fields contains extra meta data about results, if available
      }
    );


// config template engine
configViewEngine(app);
// routes init
app.use('/admin',route);
// run app
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
});
