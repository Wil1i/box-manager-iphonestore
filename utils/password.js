const bcrypt = require("bcrypt");

const encrypt = async (password) => {
  const salt = await bcrypt.genSaltSync(10);
  const hash = await bcrypt.hashSync(password, salt);
  return hash;
};

const validate = (password, correctPassword) => {
  return bcrypt.compareSync(password, correctPassword);
};

module.exports = {
  encrypt,
  validate,
};