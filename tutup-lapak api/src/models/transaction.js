const { DataTypes } = require("sequelize");

const Transaction = (sequelize) => {
  return sequelize.define("Transaction", {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    total_price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = Transaction;
