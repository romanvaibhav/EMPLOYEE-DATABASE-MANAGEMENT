const rateLimit = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  message: "Too many req, please try after 1 min",
});

module.exports = limiter;
