require("../config/dbConnection");
const Item = require("../models/Item");
const User = require("../models/User");

const items = [
  {
    name: "plante",
    description: "plante de jardin",
    image:
      "https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png",
    category: "Plant",
    quantity: 2,
    address: "3 rue du chateau, Asnières sur Seine",
    location: {
      coordinates: [48.852558, 2.38859],
    },
    formattedAddress: "3 rue du chateau, Asnières sur Seine",
    creator: "",
    contact: "phone",
  },
  {
    name: "plante",
    description: "plante de jardin",
    image:
      "https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png",
    category: "Plant",
    quantity: 2,
    address: "5 rue du chateau, Asnières sur Seine",
    location: {
      coordinates: [48.8, 2.3],
    },
    formattedAddress: "5 rue du chateau, Asnières sur Seine",
    creator: "",
    contact: "phone",
  },
  {
    name: "plante",
    description: "plante de jardin",
    image:
      "https://cdn1.iconfinder.com/data/icons/gardening-filled-line/614/1935_-_Growing_Plant-512.png",
    category: "Plant",
    quantity: 2,
    address: "4 rue du chateau, Asnières sur Seine",
    location: {
      coordinates: [48.8525, 2.388],
    },
    formattedAddress: "4 rue du chateau, Asnières sur Seine",
    creator: "",
    contact: "phone",
  },
];

User.find()
  .then((userDocuments) => {
    console.log("before for each", items);
    items.forEach((item) => {
      const randomIndex = Math.floor(
        Math.random() * (userDocuments.length - 1 - 0 + 1) + 0
      );
      item.creator = userDocuments[randomIndex]._id;
    });
    Item.create(items)
      .then((itemDocuments) => {
        console.log(itemDocuments);
      })
      .catch((error) => {
        console.log(error);
      });
  })
  .catch((error) => {
    console.log(error);
  });

seed();
