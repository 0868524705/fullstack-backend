const express = require('express');
const router = express.Router();
const {getHomaPage,getTestPage} = require('../Controllers/homeController');

router.get('/', getHomaPage);

router.get('/test', getTestPage);

  
module.exports = router;