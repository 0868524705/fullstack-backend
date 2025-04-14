const mongoose = require("mongoose"); //mongodb
// schema model có tác dụng duy nhất là định dạng dữ liệu
const userSchema = new mongoose.Schema({
  email: String,
  name: String,
  city: String,
});
// model là đối tượng tương tác với database
const Users = mongoose.model("user", userSchema);

module.exports = Users; // export model
