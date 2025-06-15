const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    res.status(401).json({ error: "No token" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer", ""));
    req.User = decoded.User;
    next();
  } catch (err) {
    res.status(401).json({ error: "invalid token" });
  }
};
