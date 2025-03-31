const connection = require('../config/database');

// getAll data from Users table
const getAllUsers = async (req, res) => {
  let [results,fields] = await connection.query('select * from Users');
    return results;
}
module.exports = {
    getAllUsers,
}