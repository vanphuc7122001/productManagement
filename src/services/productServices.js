const { Product } = require("../app/models");
const showAllProducts = async () => {
  const products = await Product.findAll();
  if (products.length >= 1) {
    return products;
  } else {
    return false;
  }
};

const showProductDetail = async (id) => {
  const product = Product.findOne({
    where: {
      id,
    },
  });
  if (product) {
    return product;
  } else {
    return false;
  }
};

const createProduct = (product) => {
  return new Promise(async (resolve, reject) => {
    const newProduct = await Product.create(product);
    resolve(newProduct);
  });
};

const updateProduct = async (id, product) => {
  const productId = await showProductDetail(id);
  if (productId) {
    return new Promise(async (resolve, reject) => {
      const newProduct = { ...product };
      await Product.update(newProduct, {
        where: {
          id,
        },
      });
      resolve(newProduct);
    });
  } else {
    return false;
  }
};

const deleteProduct = async (id) => {
  const product = await showProductDetail(id);
  if (product) {
    return new Promise(async (resolve, reject) => {
      const deletedProduct = await Product.destroy({
        where: {
          id,
        },
      });
      resolve(product);
    });
  } else {
    return false;
  }
};

module.exports = {
  showAllProducts,
  showProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
};
