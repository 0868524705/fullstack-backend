const connection = require('../config/database');

// getAll data from Users table
const getAllUsers = async (req, res) => {
  let [results,fields] = await connection.query('select * from Users');
    return results;
}

const getUserById = async (userid) => {
  let [results, fields] = await connection.query(
    `select * from Users where id = ?`,
    [userid]
  );
  let user = results &&  results.length > 0 ? results[0] : {}; 
  return user; 
}

// add user to Users table
const addUserToDatabase = async (email, name, city) => {
  try {
    const [results, fields] = await connection.query(
      `INSERT INTO Users (email,name,city)
            VALUES (?, ?, ?);`,
      [email, name, city]
    );
  } catch (err) {
    throw new Error(">>>err= " + err);
  }
}

const updateUserToDatabase = async (id,email, name, city) => {
  try {
    let [results, fields] = await connection.query(
      `UPDATE Users SET email = ?, name = ?, city = ? WHERE id = ?`,
      [email, name, city, id]
    );
  } catch (err) {
    console.log(">>>err= ", err);
  }
}

module.exports = {
    getAllUsers,getUserById,addUserToDatabase,updateUserToDatabase
}
