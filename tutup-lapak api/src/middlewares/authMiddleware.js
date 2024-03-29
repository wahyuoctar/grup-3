const { verifySession } = require("../lib/session");

const authorizeLoggedInUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    const verifiedToken = await verifySession(token);

    // if (!verifiedToken) throw new Error("Session invalid/expired");

    req.token = verifiedToken.dataValues;

    console.log(req.token);

    next();
  } catch (err) {
    console.log(err);
    return res.status(419).json({
      message: err.message,
    });
  }
};

module.exports = {
  authorizeLoggedInUser,
};
