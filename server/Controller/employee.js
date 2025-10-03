const { connect } = require("../db");
const { CreateEmployeeData } = require("../Model/employeeModel");

let db;
(async () => {
  db = await connect();
  CreateEmployeeData(db);
})();

async function addEmployee(req, res) {
  try {
    const { name, email, position } = req.body;

    if (!name || !email || !position) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const result = await db.run(
      `INSERT INTO employee (name, email, position) VALUES(?, ?, ?)`,
      [name, email, position]
    );

    return res.status(200).json({
      message: "Employee added succesfully",
      Id: result.lastID,
      name,
      email,
      position,
    });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

async function getEmployee(res, res) {
  try {
    const emploees = await db.all(`SELECT * FROM employee`);
    return res.status(200).json({ message: "All employee Data", emploees });
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

async function deleteEmployee(req, res) {
  try {
    const { id } = req.query;
    console.log(id);
    const employee = await db.run(`DELETE FROM employee WHERE id=?`, [id]);
    if (employee.changes === 0) {
      return res.status(404).json({ message: "Employee not found" });
    }
    const result = await db.all(`SELECT * FROM employee`);
    return res
      .status(200)
      .json({ message: "Employee Deleted Succesfully", result });
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

async function updateEmployee(req, res) {
  try {
    const { name, email, position } = req.body;
    const { id } = req.query;
    if (!id)
      return res.status(400).json({ error: "Valid Employee ID required" });
    if (!name && !email && !position)
      return res.status(400).json({ error: "At least one field required" });

    const fields = [];
    const values = [];

    if (name) {
      fields.push("name = ?");
      values.push(name);
    }
    if (email) {
      fields.push("email = ?");
      values.push(email);
    }
    if (position) {
      fields.push("position = ?");
      values.push(position);
    }

    values.push(id);
    const empData = await db.all(`SELECT * FROM employee`);
    const result = await db.run(
      `UPDATE employee SET ${fields.join(", ")} WHERE id = ?`,
      values
    );

    if (result.changes === 0)
      return res.status(404).json({ message: "Employee not found" });

    return res
      .status(200)
      .json({ message: `Employee with ID ${id} updated`, empData });
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

async function searchByName(req, res) {
  try {
    const search = req.query.search || "";
    console.log(search);
    const employess = await db.all(
      `SELECT * FROM employee WHERE LOWER(name) LIKE LOWER(?)`,
      [`%${search}%`]
    );
    console.log(employess);
    return res.status(200).json({ message: "search Result", employess });
  } catch (err) {
    return res.status(500).json(err.message);
  }
}

module.exports = {
  addEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
  searchByName,
};
