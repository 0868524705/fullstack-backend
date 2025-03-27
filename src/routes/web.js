const express = require('express');
const router = express.Router();
const {getHomaPage, addUser} = require('../Controllers/homeController');

router.get('/', getHomaPage);
router.post('/add', addUser);

  
module.exports = router;