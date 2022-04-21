const { Sequelize } = require("sequelize");
const mysqlConfig = require("../configs/database");

const sequelize = new Sequelize({
  username: mysqlConfig.MYSQL_USERNAME,
  password: mysqlConfig.MYSQL_PASSWORD,
  database: mysqlConfig.MYSQL_DB_NAME,
  port: 3306,
  dialect: "mysql",
  logging: false,
});

// Models
const Product = require("../models/product")(sequelize);
const Transaction = require("../models/transaction")(sequelize);
const User = require("../models/user")(sequelize);
const Session = require("../models/session")(sequelize);
const Cart = require("../models/cart")(sequelize);

User.hasMany(Session, { foreignKey: user_id });
Session.belongsTo(User, { foreignKey: user_id });

User.hasMany(Transaction, { foreignKey: user_id });
Transaction.belongsTo(User, { foreignKey: user_id });

Product.hasMany(Transaction, { foreignKey: product_id });
Transaction.belongsTo(Product, { foreignKey: product_id });

User.hasMany(Cart, { foreignKey: user_id });
Cart.belongsTo(User, { foreignKey: user_id });

Product.hasMany(Cart, { foreignKey: product_id });
Cart.belongsTo(Product, { foreignKey: product_id });

module.exports = {
  sequelize,
  Product,
  Transaction,
  User,
  Session,
  Cart,
};
