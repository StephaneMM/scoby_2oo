const express = require("express");
const ItemModel = require("../models/Item");
const router = express.Router();

router.get("/", (req, res, next) => {
  ItemModel.find()
    .then((itemsfound) => {
      res.status(200).json(itemsfound);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  ItemModel.findById(req.params.id)
    .then((itemfound) => {
      res.status(200).json(itemfound);
    })
    .catch(next);
});

// POST	/api/items	Create an item in the DB	Requires auth.

router.post("/", (req, res, next) => {
  req.body.location = {
    coordinates: [req.body.lng, req.body.lat],
  };

  req.body.creator = req.session.currentUser;

  ItemModel.create(req.body)
    .then((itemDocument) => {
      res.status(200).json(itemDocument);
    })
    .catch(next);
});

// PATCH	/api/items/:id	Update an item	Requires auth.
router.patch("/:id", (req, res, next) => {
  ItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch(next);
});

// DELETE	/api/items/:id	Deletes an item {404 sur postman}

router.delete("/:id", (req, res, next) => {
  ItemModel.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
