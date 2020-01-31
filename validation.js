//jshint esversion:6
//VALIDATION
const Joi = require("@hapi/joi");

//REGISTER VALIDATION
const registerValidation = data => {
  const schema = Joi.object({
    name: Joi.string()
      .required(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    regNo: Joi.string()
      .min(9)
      .required(),
    gender: Joi.string()
      .min(4)
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};
const loginValidation = data => {
  const schema = Joi.object({
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    password: Joi.string()
      .min(6)
      .required()
  });
  return schema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
