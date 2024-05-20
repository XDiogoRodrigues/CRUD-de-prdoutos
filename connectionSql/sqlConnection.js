const my_sql = require("mysql");
const chalk = require("chalk");

let db_con = my_sql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456789",
  database: "products_database_node",
});

db_con.connect((err) => {
  if (err) {
    console.log(chalk.bgGreen.blue("Database Connection Failed!", err));
  } else {
    console.log(chalk.bgGreen.blue(`Database Connection Sucessfully!`));
  }
});

module.exports = db_con;
