const productRouter = require("./productRouter");

const initRoutes = (app) => {
  app.use("/products", productRouter);
};

module.exports = {
  initRoutes,
};
