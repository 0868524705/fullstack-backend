const express = require('express') // common js
const path = require('path')
const app = express() // app express
const port = 3000 // port

// config template engine
app.set('views', path.join(__dirname,'./views/'))
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