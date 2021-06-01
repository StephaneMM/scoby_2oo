const express = require("express");
const Users = require("../models/User");
const router = express.Router();


// REQUIRED MIDDLEWARE
router.get("/me", (req, res, next) => {
  Users.find()
    .then((userfound) => {
      res.status(200).json(userfound);
    })
    .catch(next);
});

// REQUIRED MIDDLEWARE
router.get("/me/items", (req, res, next) => {
  Users.findById(req.params.id).populate("Items")
    .then((itemsfound) => {
      res.status(200).json(itemsfound);
    })
    .catch(next);
});



// PATCH	/REQUIRED MIDDLEWARE
router.patch("/me", (req, res, next) => {
  Users.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch(next);
});


module.exports = router;
