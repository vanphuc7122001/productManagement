const { DataTypes } = require("sequelize");

const createProductModel = (sequelize) => {
  return sequelize.define(
    "product",
    {
      // Model attributes are defined here
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      amount: {
        type: DataTypes.INTEGER,
        // allowNull defaults to true
      },
      price: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sale: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: "products",
      timestamps: true,
    }
  );
};

module.exports = {
  createProductModel,
};
