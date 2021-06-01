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
        password: "1234" ,
        phoneNumber: "0707070707",
      },
      {
        firstName: "Aurélie",
        lastName: "Hackeuse",
        profileImg: "https://vignette.wikia.nocookie.net/simpsons/images/1/14/Ralph_Wiggum.png/revision/latest/top-crop/width/360/height/360?cb=20100704163100",
        email: "aurélie.hackeuse@gmail.com" ,
        password: "1234" ,
        phoneNumber: "0707070707",
      }


]

async function seed() {
    try {
      const createdUsers = await User.create(users);
      console.log(createdUsers);
    } catch (error) {
      console.log(error);
    }
  }
  
  seed();
