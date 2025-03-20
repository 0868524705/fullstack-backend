const express = require('express') // common js
const path = require('path') // common js
require('dotenv').config() //config env
const app = express() // app express
const port = process.env.PORT || 3333; // port
const hostname = process.env.HOSTNAME; // hostname

// config template engine
app.set('views', path.join(__dirname,'views/'))
app.set('view engine', 'ejs')

// routes
app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('example.ejs')
})

// run app
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
