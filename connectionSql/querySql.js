const express = require("express");
const router = express.Router();
const path = require("path");
const {
  createTable,
  insertData,
  deleteData,
  updateData,
} = require("./functionsSql");

const basePath = path.join(__dirname, "../templates");

router.post("/data_product", (req, res) => {
  const nameProduct = req.body.name;
  const quantity = req.body.quantity;
  const price = req.body.price;

  createTable();
  insertData(nameProduct, quantity, price);
  res.sendFile(`${basePath}/register.html`);
});

router.post("/delete_product", (req, res) => {
  const name = req.body.product_delete;
  deleteData(name);
  res.sendFile(`${basePath}/delete.html`);
});

router.post("/update_data", (req, res) => {
  const nameTratado = req.body.product_update;
  const quantity = req.body.quantity;
  const price = req.body.price;
  updateData(nameTratado, quantity, price);
  res.sendFile(`${basePath}/update.html`);
});

module.exports = router;
