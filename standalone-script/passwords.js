//jshint esversion:6
var uuid4 = require("uuid4");

// Generate a new UUID
module.exports.generate = () => {
  return uuid4();
};
