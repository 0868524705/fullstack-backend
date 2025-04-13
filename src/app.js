const express = require("express"); // common js
const configViewEngine = require("./config/viewEngine"); // common js
require("dotenv").config(); //config env
const app = express(); // app express
const route = require("./routes/web"); // routes
const port = process.env.PORT || 3333; // port
const hostname = process.env.HOSTNAME; // hostname
const connection = require("./config/database"); // database
const mongoose = require("mongoose"); //mongodb

// config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Cho form HTML

const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const cat = new Kitten({ name: 'phuong hoc dev ' });
cat.save().then(() => console.log('meow'));

(async () => {
  // test database
  try {
    await connection(); // connect to db
    // run app
    app.listen(port, hostname, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log("lỗi>>>>", error); // log error
  }
})(); // self invoke function

// config template engine
configViewEngine(app);
// routes init
app.use("/", route);
