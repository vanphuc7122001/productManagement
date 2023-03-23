const { Sequelize } = require("sequelize");
const { createProductModel } = require("./createModelProduct");
const {
  port,
  database,
  user,
  password,
  host,
  dialect,
} = require("../../config/dbConfig");

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  port,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const Product = createProductModel(sequelize);

const syncModel = async () => {
  // await sequelize.drop();
  await sequelize.sync({ alter: true });
};

module.exports = {
  connectDB,
  syncModel,
  Product,
};
