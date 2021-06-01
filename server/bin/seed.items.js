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
      coordinates: [48.8522, 2.3883],
    },
    formattedAddress: "4 rue du chateau, Asnières sur Seine",
    creator: "",
    contact: "phone",
  },
  {
    name: "Plant Name",
    description: "A beautiful Plant",
    category: "Plant",
    quantity: 3,
    address: "221 Boulevard Voltaire",
    location: {
      coordinates: [48.8563, 2.3523],
    },
    formattedAddress: "221 Boulevard Voltaire",
    creator: "the id of the user",
    contact: "phone",
  },
  {
    name: "Plant Name2",
    description: "A beautiful Plant2",
    category: "Plant",
    quantity: 3,
    address: "221 Boulevard Voltaire",
    location: {
      coordinates: [48.8566, 2.352],
    },
    formattedAddress: "221 Boulevard Voltaire",
    creator: "the id of the user",
    contact: "phone",
  },
  {
    name: "Plant Name3",
    description: "A beautiful Plant3",
    category: "Plant",
    quantity: 3,
    address: "221 Boulevard Voltaire",
    location: {
      coordinates: [48.856, 2.3522],
    },
    formattedAddress: "221 Boulevard Voltaire",
    creator: "the id of the user",
    contact: "phone",
  }
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
