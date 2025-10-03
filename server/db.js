const sqlite3 = require("sqlite3").verbose();
const { open } = require("sqlite");

async function connect() {
  const db = await open({
    filename: "./data.db",
    driver: sqlite3.Database,
  });
  console.log("Database connected");
  return db;
}

module.exports = { connect };
