const express = require("express");
const app = express();
const path = require("path");
const products = require("./products/index");
const sqls = require("./connectionSql/querySql");

const basePath = path.join(__dirname, "templates");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(express.static("public"));

app.use("/products", products);
app.use("/connectionSql", sqls);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta: 3000");
});
