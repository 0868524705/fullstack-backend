const path = require('path') // common js
const express = require('express') // common js

const configViewEngine = (app) => {
    app.set('views', path.join('./src','views/'))
    app.set('view engine', 'ejs')
    // config static files
    app.use(express.static(path.join('./src', "public")));
}

module.exports = configViewEngine;