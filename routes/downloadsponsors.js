//jshint esversion:8
const router = require("express").Router();
const createCsvWriter = require("csv-writer").createObjectCsvWriter;
const Sponsor = require("../model/Sponsor");
let q = [];
router.get("/", async(req, res) => {
  const csvWriter = createCsvWriter({
    path: "sponsors.csv",
    header: [
      {
        id: "name",
        title: "Name"
      },
      {
        id: "company",
        title: "Company"
      },
      {
        id: "email",
        title: "E-Mail"
      },
      {
        id: "phone",
        title: "Phone"
      }
    ]
  });
  q = await Sponsor.collection.find({});
  console.log(q);
  csvWriter
    .writeRecords(q)
    .then(()=>{
      console.log("Successfully processed to CSV");
    })
    .catch(err => {
      return err;
    });
  const file = "sponsors.csv";
  res.download(file);
});
module.exports = router;
