// database
const mongoose = require("mongoose"); //mongodb
require("dotenv").config(); //config env

const dbState = [{
  value: 0,
  label: "disconnected"
},
{
  value: 1,
  label: "connected"
},
{
  value: 2,
  label: "connecting"
},
{
  value: 3,
  label: "disconnecting"
}];

const connection = async () => {

  // Or:
  try {
    await mongoose.connect("mongodb://root:123456@localhost:27018/");
    const state = Number(mongoose.connection.readyState);
    console.log(dbState.find(f => f.value == state).label, "to db"); // connected to db
  } catch (error) {
    console.log("lỗi>>>>",error);
  }
};

module.exports = connection;
