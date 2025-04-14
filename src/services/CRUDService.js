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
    await connection.query(
      `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`,
      [newUser.email, newUser.name, newUser.city]
    );
    return newUser; // Return the new user object
    res.send("ok");
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

const deleteUserToDatabase = async (id) => {
    let [results, fields] = await connection.query(
      `DELETE FROM Users WHERE id = ?`,
      [id]
    );
    return results.affectedRows;

}

module.exports = {
    getAllUsers,getUserById,addUserToDatabase,updateUserToDatabase,deleteUserToDatabase
}
