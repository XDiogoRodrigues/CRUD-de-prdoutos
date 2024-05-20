const database = require("./sqlConnection");
const chalk = require("chalk");

function createTable() {
  let createTableProducts =
    "CREATE TABLE IF NOT EXISTS Products(name VARCHAR(255), quantity VARCHAR(255), price VARCHAR(255), total DECIMAL(10,2))";

  database.query(createTableProducts, (err) => {
    if (err) {
      console.log(
        chalk.bgGreen.blue("Algo deu errado na criação da tabela Products", err)
      );
    } else {
      console.log(chalk.bgGreen.blue("Tabela criada com sucesso"));
    }
  });
}

function insertData(name, quantity, price) {
  let nameTratado = name.toLowerCase();
  let total = parseFloat(price) * parseInt(quantity);
  let queryInsert = `INSERT INTO Products(name,quantity, price, total) VALUES('${nameTratado}', '${quantity}', '${price}', ${total})`;

  database.query(queryInsert, (err) => {
    if (err) {
      console.log(chalk.bgGreen.blue("Algo deu errado!", err));
    } else {
      console.log(chalk.bgGreen.blue("Dados inseridos com sucesso!"));
    }
  });
}

function deleteData(name) {
  let nameTratado = name.toLowerCase();
  let queryDelete = `DELETE FROM Products WHERE name = '${nameTratado}'`;

  database.query(queryDelete, (err) => {
    if (err) {
      console.log(chalk.bgGreen.blue("Algo deu errado!"));
    } else {
      console.log(`O Produto: ${name} foi deletado da banco de dados!`);
    }
  });
}

function updateData(name, quantidade, price) {
  let total = parseFloat(price) * parseInt(quantidade);
  let queryUpdate = `UPDATE Products SET quantity = '${quantidade}', price = '${price}', total = ${total} WHERE name = '${name}'`;

  database.query(queryUpdate, (err) => {
    if (err) {
      console.log("Algo deu errado!", err);
    } else {
      console.log("Dados alterados!");
    }
  });
}

module.exports = { createTable, insertData, deleteData, updateData };
