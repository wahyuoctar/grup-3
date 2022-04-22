const router = require("express").Router();
const authControllers = require("../controllers/auth");

router.post("/register", authControllers.registerUser);

module.exports = router;
