const { DataTypes } = require("sequelize");

const History = (sequelize) => {
  return sequelize.define("History", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = History;
