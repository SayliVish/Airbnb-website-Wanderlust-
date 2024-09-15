const express = require("express");
const router = express.Router();



//index
router.get("/", (req, res) => {
  res.send("GET for ");
});

//show
router.get("/:id", (req, res) => {
  res.send("GET for   id");
});
//POST
router.post("/", (req, res) => {
  res.send("POST for users");
});
//DELETE
router.delete("/:id", (req, res) => {
  res.send("GET for users id");
});


module.exports = router;