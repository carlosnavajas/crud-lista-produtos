const express = require("express");

const routes = express.Router();
const ProdutoController = require("./app/controller/ProdutoController");

routes.get("/api/v1/produtos", ProdutoController.index);

routes.get("/api/v1/produtos/:id", ProdutoController.findOneById);

routes.post("/api/v1/produtos", ProdutoController.store);

routes.post("/api/v1/produtos/:id", ProdutoController.updateById);

routes.delete("/api/v1/produtos/:id", ProdutoController.deleteById);

module.exports = routes;