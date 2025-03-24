const connection = require('../config/database');

const getHomaPage = (req, res) => {
    let user = [];
    // A simple SELECT query
    connection.query(
        'SELECT * from Users u',
        function(err, results, fields) {
            user = results;
          console.log(">>>results= ", results); // results contains rows returned by server
          console.log(">>>fields= ", fields); // fields contains extra meta data about results, if available
        }
      );

      console.log(">>>check user= ", user);
  
    res.send('This is the home page')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomaPage
    , getTestPage
}