const express = require("express");
const Users = require("../models/User");
const router = express.Router();
const Items = require('../models/Item.js')

// REQUIRED MIDDLEWARE
router.get("/me", (req, res, next) => {
  Users.findById(req.session.currentUser)
    .select("-paswword")
    .then((userfound) => {
      res.status(200).json(userfound);
    })
    .catch(next);
});

// REQUIRED MIDDLEWARE
router.get("/me/items", (req, res, next) => {
  Items.find({creator : req.session.currentUser})
    .then((itemsfound) => {
      res.status(200).json(itemsfound);
    })
    .catch(next);
});

// PATCH	/REQUIRED MIDDLEWARE
router.patch("/me", (req, res, next) => {
  if (req.body.password) {
    return res.status(400).json({ message: "Password field will send" });
  }
  Users.findByIdAndUpdate(req.session.currentUser, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch(next);
});

module.exports = router;
