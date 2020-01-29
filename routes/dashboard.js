const router = require('express').Router();
const verify = require('./verifyToken');
const User = require('../model/User');

router.get('/', verify, async (req, res) => {
  const use = await User.findOne({
    _id: req.user
  });
  res.send(use);
});


module.exports = router;