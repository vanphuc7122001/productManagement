const {
  showAllProducts,
  showProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../services/productServices");

class productController {
  showAllProducts(req, res) {
    const allProducts = showAllProducts();
    if (allProducts) {
      res.status(200).send(allProducts);
    } else {
      res.status(404).send("Not found!!");
    }
  }

  showProductDetail(req, res) {
    const { id } = req.params;
    const product = showProductDetail(id);
    if (product) {
      res.status(200).send("Chi tiết sản phẩm " + product.name);
    } else {
      res.status(404).send("Not Found!");
    }
  }

  createProduct(req, res) {
    const data = req.body;
    const newProduct = createProduct(data);
    res.status(201).send(newProduct);
  }

  updateProduct(req, res) {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = updateProduct(id, data);
    if (updatedProduct) {
      res.status(200).send(updatedProduct);
    } else {
      res.status(404).send("Not Found!");
    }
  }

  deleteProduct(req, res) {
    const { id } = req.params;
    const deletedProduct = deleteProduct(id);
    if (deletedProduct) {
      res.status(200).send(deletedProduct);
    } else {
      res.status(404).send("Not Found!");
    }
  }
}

module.exports = new productController();
