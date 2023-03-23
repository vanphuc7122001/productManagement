const {
  showAllProducts,
  showProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../../services/productServices");

class productController {
  async showAllProducts(req, res) {
    const allProducts = await showAllProducts();
    if (allProducts) {
      res.status(200).json(allProducts);
    } else {
      res.status(404).json({ msg: "Not found!!" });
    }
  }

  async showProductDetail(req, res) {
    const { id } = req.params;
    const product = await showProductDetail(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ mgs: "Not Found!" });
    }
  }

  async createProduct(req, res) {
    const data = req.body;
    const newProduct = await createProduct(data);
    res.status(201).json({
      newProduct,
    });
  }

  async updateProduct(req, res) {
    const { id } = req.params;
    const data = req.body;
    const updatedProduct = await updateProduct(id, data);
    if (updatedProduct) {
      res.status(200).json(updatedProduct);
    } else {
      res.status(404).json({ msg: "Not Found!" });
    }
  }

  async deleteProduct(req, res) {
    const { id } = req.params;
    const deletedProduct = await deleteProduct(id);
    if (deletedProduct) {
      res.status(200).json({
        msg: "Product deleted successfully",
      });
    } else {
      res.status(404).json({ msg: "Not Found!" });
    }
  }
}

module.exports = new productController();
