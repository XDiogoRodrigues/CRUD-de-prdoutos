const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/register_products", (req, res) => {
  res.sendFile(`${basePath}/register.html`);
});

router.get("/delete_product", (req, res) => {
  res.sendFile(`${basePath}/delete.html`);
});

router.get("/home", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

router.get("/update", (req, res) => {
  res.sendFile(`${basePath}/update.html`);
});

module.exports = router;
