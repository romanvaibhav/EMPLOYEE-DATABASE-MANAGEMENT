const express = require("express");
const router = express.Router();
const {
  addEmployee,
  getEmployee,
  deleteEmployee,
  updateEmployee,
  searchByName,
} = require("../Controller/employee");

router.post("/add", addEmployee);
router.get("/getEmp", getEmployee);
router.delete("/deleteEmp", deleteEmployee);
router.put("/updateEmp", updateEmployee);

router.get("/searchEmp", searchByName);

module.exports = router;
