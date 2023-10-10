const jwt = require("jsonwebtoken");
const secret = process.env.SECRET || "anonymous";

const tokenGenerator = (data) => {
  const { id, email } = data;
  return jwt.sign(
    {
      id,
      email,
    },
    secret
  );
};

const tokenVerifier = (data) => {
  return jwt.verify(data, secret);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
