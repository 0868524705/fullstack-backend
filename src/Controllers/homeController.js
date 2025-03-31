const connection = require('../config/database');
const crudService = require('../services/CRUDService');
const getHomaPage = async (req, res) => {
let results = await crudService.getAllUsers(req, res);
    res.render('home.ejs',{listUsers: results});
}
const viewAddUser = (req, res) => {
    res.render('addUser.ejs')
}
  const addUser = async (req, res) => {
    let {email, name,city} = req.body;
    try {
        const [results,fields] = await connection.query(
          `INSERT INTO Users (email,name,city)
            VALUES (?, ?, ?);`,
          [email, name, city]
        );
        
        console.log(">>>checkUser: ",results);
      } catch (err) {
        console.log('>>>err= ',err);
      }
    
    res.send('create user success')
}

module.exports = {
    getHomaPage
    , addUser,
    viewAddUser,
}