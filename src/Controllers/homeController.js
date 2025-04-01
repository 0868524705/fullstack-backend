const connection = require("../config/database");
const crudService = require("../services/CRUDService");
const getHomaPage = async (req, res) => {
  let results = await crudService.getAllUsers(req, res);
  res.render("home.ejs", { listUsers: results });
};
const viewAddUser = (req, res) => {
  res.render("addUser.ejs");
};

const addUser = async (req, res) => {
  let { email, name, city } = req.body;
  try {
    const [results, fields] = await connection.query(
      `INSERT INTO Users (email,name,city)
            VALUES (?, ?, ?);`,
      [email, name, city]
    );

    console.log(">>>checkUser: ", results);
  } catch (err) {
    console.log(">>>err= ", err);
  }

  res.send("create user success");
};


const viewEditUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(">>> Check User ID: ", id);

    // Truy vấn dữ liệu user theo ID (dùng promise để tránh lỗi)
    const [result] = await connection.promise().query(`SELECT * FROM Users WHERE id = ?`, [id]);

    if (result.length === 0) {
      return res.status(404).send("User not found");
    }

    // Render trang editUser và truyền dữ liệu user vào
    res.render("editUser.ejs", { person: result[0] });

  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu người dùng:", error);
    res.status(500).send("Lỗi server");
  }
};



module.exports = {
  getHomaPage,
  addUser,
  viewAddUser,viewEditUser
};
