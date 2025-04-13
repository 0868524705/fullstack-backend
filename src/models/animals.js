const mongoose = require("mongoose"); //mongodb
// schema model có tác dụng duy nhất là định dạng dữ liệu
const animalsSchema = new mongoose.Schema({
    name: String
  });
  // model là đối tượng tương tác với database
  const animals = mongoose.model('animal', animalsSchema);

  module.exports = animals; // export model