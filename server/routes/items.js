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
  const { name, description, image, category, quantity, address, location, formattedAddress, creator, contact } = req.body;

  const newItem = {
    name,
    description,
    image,
    category,
    quantity,
    address,
    location,
    formattedAddress,
    creator,
    contact,
  };

  ItemModel.create(newItem)
    .then((itemDocument) => {
      res.status(201).json(itemDocument);
    })
    .catch(next);
});

// PATCH	/api/items/:id	Update an item	Requires auth.
router.patch("/:id", (req, res, next) => {
  ItemModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => res.status(200).json(result))
    .catch(next);
});

// DELETE	/api/items/:id	Deletes an item

router.delete("/:id", (req, res, next) => {
  ItemModel.findByIdAndDelete(req.params.id)
    .then((result) => res.sendStatus(204))
    .catch(next);
});

module.exports = router;
