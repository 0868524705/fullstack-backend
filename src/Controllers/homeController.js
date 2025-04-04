const connection = require("../config/database");
const userService = require("../services/CRUDService");
// getAll data from Users table
const getHomaPage = async (req, res) => {
  let results = await userService.getAllUsers(req, res);
  res.render("home.ejs", { listUsers: results });
};
// move to addUser.ejs
const viewAddUser = (req, res) => {
  res.render("addUser.ejs");
};

// add user to Users table
const addUser = async (req, res) => {
  let { email, name, city } = req.body;
  try {
    let newUser = await userService.addUserToDatabase(email, name, city);
    res.redirect("/"); // Redirect to the homepage after adding the user
  } catch (err) {
    console.log("Error adding user: ", err);
    res.status(500).send("An error occurred while adding the user.");
  }
};

// move to editUser.ejs and get data from a user == id
const viewEditUser = async (req, res) => {
    const  userid  = req.params.id;
    let user = await userService.getUserById(userid);
    res.render("editUser.ejs",{user : user});
};

// update user to Users table
const updateUser = async (req, res) => {
  let { email, name, city } = req.body;
  let id = req.params.id;
  try {
    await userService.updateUserToDatabase(id, email, name, city);
    res.redirect("/"); // Redirect to the homepage after updating the user
  } catch (err) {
    console.log("Error updating user: ", err);
    res.status(500).send("An error occurred while updating the user.");
  }
};

const deleteUser = async (req, res) => {

    const affectedRows = await userService.deleteUserToDatabase(req.params.id);
  if (affectedRows == 0) {
    res.status(404).send("User not found ",req.params.id);
  }else {
    res.redirect("/"); // Redirect to the homepage after deleting the user
  }
  
}


module.exports = {
  getHomaPage,
  addUser,
  viewAddUser,viewEditUser,updateUser,deleteUser
};
