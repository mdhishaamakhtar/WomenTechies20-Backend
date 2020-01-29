const mongoose = require('mongoose');
const user = require('../model/User');
const csv = require('csv-parser');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
dotenv.config();
// make a connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true
}, () => console.log("connected to DB"));
var q = new Array();
const fs = require('fs');
fs.createReadStream('details1.csv')
  .pipe(csv())
  .on('data', async (row) => {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(row.password, salt);
    row.password = hashPassword;
    q = q.concat(row);
    user.collection.insert(q, function(err, docs) {
      if (err) {
        return console.error(err);
      } else {
        console.log("Inserted");
      }
    });
    q = [];
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });