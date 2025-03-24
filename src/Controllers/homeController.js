const connection = require('../config/database');

const getHomaPage = (req, res) => {
    // A simple SELECT query
    // connection.query(
    //     'SELECT * from Users u',
    //     function(err, results, fields) {
    //       console.log(">>>results= ", results); // results contains rows returned by server
    //       console.log(">>>fields= ", fields); // fields contains extra meta data about results, if available
    //     }
    //   );
    res.render('home.ejs')
}

const getTestPage = (req, res) => {
    res.render('example.ejs')
}

module.exports = {
    getHomaPage
    , getTestPage
}