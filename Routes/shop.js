const express = require("express");

const productController = require("../Controller/products")

const shopRouter = express.Router();

shopRouter.get("/", productController.getProductPage);

module.exports = shopRouter;
