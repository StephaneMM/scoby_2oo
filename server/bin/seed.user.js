const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
require("../config/dbConnection");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const salt = 10;


const users = [
{
        firstName: "Stéphane",
        lastName: "MBESSE",
        profileImg: "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
        email: "stephane.mbesse@gmail.com" ,
        password: bcrypt.hashSync("1234", salt) ,
        phoneNumber: "0707070707",
      },
      {
        firstName: "Aurélie",
        lastName: "Hackeuse",
        profileImg: "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
        email: "aurélie.hackeuse@gmail.com" ,
        password: bcrypt.hashSync("1234", salt) ,
        phoneNumber: "0707070707",
      },
      {
        firstName: "toto",
        lastName: "toto",
        email: "toto@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        phoneNumber: "06060606606",
      },
      {
        firstName: "Lola",
        lastName: "The Cat",
        email: "lola@gmail.com",
        password: bcrypt.hashSync("1234", salt),
        phoneNumber: "06060606606",
      }


]

User.create(users)
  .then((documents) => {
    console.log(documents);
  })
  .catch((error) => {
    console.log(error);
  });
  
// OR
// async function seed() {
//     try {
//       const createdUsers = await User.create(users);
//       console.log(createdUsers);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   seed();
