let productList = require("../utils/productList");

const showAllProducts = () => {
  if (productList) {
    return productList;
  } else {
    return false;
  }
};

const showProductDetail = (id) => {
  const product = productList.find((product) => product.id == id);
  if (product) {
    return product;
  } else {
    return false;
  }
};

const createProduct = (product) => {
  const newProduct = {
    id: Math.random(),
    ...product,
  };
  productList = [...productList, newProduct];
  return newProduct;
};

const updateProduct = (id, product) => {
  const indexProduct = productList.findIndex((product) => product.id == id);
  if (indexProduct !== -1) {
    const oldProduct = productList[indexProduct];
    const updatedProduct = { ...oldProduct, ...product };
    productList[indexProduct] = updatedProduct;
    return updatedProduct;
  } else {
    return false;
  }
};

const deleteProduct = (id) => {
  const indexProduct = productList.findIndex((product) => product.id == id);
  if (indexProduct !== -1) {
    const deletedProduct = productList[indexProduct];
    productList.splice(indexProduct, 1); // xóa từ vị trí indexProduct và xóa 1 phần tử
    return deletedProduct;
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
