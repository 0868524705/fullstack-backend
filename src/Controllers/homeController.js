const connection = require('../config/database');
const getHomaPage = (req, res) => {

    res.render('home.ejs')
}
const viewAddUser = (req, res) => {
    res.render('addUser.ejs')
}
  async function addUser (req, res)  {
    let {email, name,city} = req.body;
    try {
        await connection.query(
          `INSERT INTO Users (email,name,city)
            VALUES (?, ?, ?);`,
          [email, name, city]
        );
        console.log('thêm thành công');
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