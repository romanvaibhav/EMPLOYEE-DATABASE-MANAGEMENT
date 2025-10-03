async function CreateEmployeeData(db) {
  await db.exec(`
        CREATE TABLE IF NOT EXISTS employee(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT NOT NULL,email TEXT UNIQUQE NOT NULL, position TEXT NOT NULL)`);
  console.log("Employee Table is ready");
}

module.exports = { CreateEmployeeData };
