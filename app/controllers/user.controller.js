//importing modules
const bcrypt = require("bcrypt");
const db = require("../models/user.model.js");
const jwt = require("jsonwebtoken");
const Users = db.users;



// Assigning users to the variable User
const User = db.users;

//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
 try {
   const { userName, email, password } = req.body;
   const data = {
     userName,
     email,
     password: await bcrypt.hash(password, 10),
   };
   //saving the user
   const user = await User.create(data);

   //if user details is captured
   //generate token with the user's id and the secretKey in the env file
   // set cookie with the token generated
   
 } catch (error) {
   console.log(error);
 }
};



module.exports = {
 signup,
 
};