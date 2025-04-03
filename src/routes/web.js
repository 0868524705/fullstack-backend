const express = require('express');
const router = express.Router();
const {getHomaPage, addUser,viewAddUser,viewEditUser,updateUser,deleteUser} = require('../Controllers/homeController');

router.get('/', getHomaPage);

router.get('/add', viewAddUser);
router.post('/add', addUser);

router.get('/edit/:id', viewEditUser);

router.post('/edit/:id', updateUser);

router.get('/delete/:id', deleteUser)
  
module.exports = router;