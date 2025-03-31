const express = require('express');
const router = express.Router();
const {getHomaPage, addUser,viewAddUser} = require('../Controllers/homeController');

router.get('/', getHomaPage);
router.get('/add', viewAddUser);
router.post('/add', addUser);

  
module.exports = router;