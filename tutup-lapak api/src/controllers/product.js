const { Product, Cart } = require("../lib/sequelize");
const Cart = require("../models/cart");

const productControllers = {
  addToCart: async (req, res) => {
    try {
      const { quantity, productId } = req.body;

      const findProduct = await Product.findOne({
        where: {
          id: productId,
        },
      });

      if (!findProduct) {
        return res.status(400).json({
          message: "Product not found",
        });
      }

      if (quantity > findProduct.stock) {
        return res.status(400).json({
          message: "not enough stock",
        });
      }

      await Cart.create({
        product_id: productId,
        quantity,
      });

      return res.status(201).json({
        message: "product added",
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "error",
      });
    }
  },
};

module.exports = productControllers;
