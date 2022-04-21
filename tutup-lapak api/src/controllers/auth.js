const { Op } = require("sequelize");
const { User } = require("../lib/sequelize");
const bcrypt = require("bcrypt");

const authControllers = {
  registerUser: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const isUsernameEmailTaken = await User.findOne({
        where: {
          [Op.or]: [{ username }, { email }],
        },
      });

      if (isUsernameEmailTaken) {
        return res.status(400).json({
          message: "Username or email has been taken",
        });
      }

      const hashedPassword = bcrypt.hashSync(password, 5);

      const newUser = await User.create({
        username,
        email,
        password: hashedPassword,
      });

      return res.status(201).json({
        message: "Registered user",
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        message: "Server error",
      });
    }
  },
};

module.exports = authControllers;
