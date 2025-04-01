const express = require('express');
const router = express.Router();
const {getHomaPage, addUser,viewAddUser,viewEditUser} = require('../Controllers/homeController');

router.get('/', getHomaPage);

router.get('/add', viewAddUser);
router.post('/add', addUser);

router.get('/edit/:id', viewEditUser);
  
module.exports = router;