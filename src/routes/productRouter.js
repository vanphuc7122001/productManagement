const express = require("express");
const productRouter = express.Router();
const productController = require("../app/controllers/productController");
const {
  checkEmpty,
  checkAmount,
} = require("../middlewares/validations/productValidations");

productRouter.get("/:id", productController.showProductDetail);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleteProduct);
productRouter.get("/", productController.showAllProducts);
productRouter.post(
  "/",
  checkEmpty,
  checkAmount,
  productController.createProduct
);
module.exports = productRouter;
