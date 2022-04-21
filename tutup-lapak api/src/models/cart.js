const { DataTypes } = require("sequelize");

const Cart = (sequelize) => {
  return sequelize.define("Cart", {
    total_price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = Cart;
