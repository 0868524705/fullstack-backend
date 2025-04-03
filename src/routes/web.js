const express = require('express');
const router = express.Router();
const {getHomaPage, addUser,viewAddUser,viewEditUser,updateUser} = require('../Controllers/homeController');

router.get('/', getHomaPage);

router.get('/add', viewAddUser);
router.post('/add', addUser);

router.get('/edit/:id', viewEditUser);

router.post('/edit/:id', updateUser);
  
module.exports = router;