const express = require("express");
const adminRoute = express.Router();

const productController = require("../Controller/products")

adminRoute.get("/add-product", productController.getAddProduct);

adminRoute.post("/product", productController.postAddProduct);

module.exports = adminRoute
