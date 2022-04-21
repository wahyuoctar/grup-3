const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const PORT = process.env.PORT;

const { sequelize } = require("./lib/sequelize");
const { authRoutes, transactionRoutes, productRoutes } = require("./routes");
sequelize.sync({ alter: true });

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/post_images", express.static(`${__dirname}/public/posts`))
// app.use("/profile_pictures", express.static(`${__dirname}/public/profile_pictures`))

app.use("/auth", authRoutes);
app.use("/transaction", transactionRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log("Listening in port", PORT);
});
