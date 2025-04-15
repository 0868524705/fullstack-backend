const connection = require("../config/database");
const userService = require("../services/CRUDService");
const User = require("../models/user"); // model user
// getAll data from Users table
const getHomaPage = async (req, res) => {
  try {
    const users = await User.find();
    console.log(users);
    res.render("home.ejs", { listUsers: users });
  } catch (err) {
    console.error('Error:', err);
  }

};
// move to addUser.ejs
const viewAddUser = (req, res) => {
  res.render("addUser.ejs");
};

// add user to Users table
const addUser = async (req, res) => {
  let { email, name, city } = req.body;
  try {
    await User.create({
      email: email,
      name: name,
      city: city,
    });
    res.redirect("/"); // Redirect to the homepage after adding the user
  } catch (err) {
    console.log("Error adding user: ", err);
    res.status(500).send("An error occurred while adding the user.");
  }
};

// move to editUser.ejs and get data from a user == id
const viewEditUser = async (req, res) => {
    const  userid  = await User.findById(req.params.id).exec();
    res.render("editUser.ejs",{user : userid});
};

// update user to Users table
const updateUser = async (req, res) => {
  let { email, name, city } = req.body;
  let id = req.params.id;
  try {
    await User.updateOne({_id: id}, {
      email: email,
      name: name,
      city: city,
    });
    console.log("User updated successfully!");
    res.redirect("/"); // Redirect to the homepage after updating the user
  } catch (err) {
    console.log("Error updating user: ", err);
    res.status(500).send("An error occurred while updating the user.");
  }
};

const deleteUser = async (req, res) => {

    const affectedRows = await User.deleteOne({_id: req.params.id});
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
