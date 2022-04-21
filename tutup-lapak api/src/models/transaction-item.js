const { DataTypes } = require("sequelize");

const TransactionItem = (sequelize) => {
  return sequelize.define("TransactionItem", {
    total_price: {
      type: DataTypes.INTEGER,
    },
  });
};

module.exports = TransactionItem;
