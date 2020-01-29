var uuid4 = require('uuid4');

// Generate a new UUID
const generate = () => {
  return uuid4();
}

module.exports.generate = generate;