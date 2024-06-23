var express = require("express");
var router = express.Router();
var jwt = require("jsonwebtoken");
var db = require("../model/helper");
require("dotenv").config();
var bcrypt = require("bcrypt");
const saltRounds = 10;

const userShouldBeLoggedIn = require('../guards/userShouldBeLoggedIn')

const supersecret = process.env.SUPER_SECRET;

router.post("/register", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      const hash = await bcrypt.hash(password, saltRounds);
  
      await db(
        `INSERT INTO users (username, password) VALUES ("${username}", "${hash}")`
      );
  
      res.send({ message: "Register successful" });
    } catch (err) {
      res.status(400).send({ message: err.message });
    }
  });
  
  router.post("/login", async (req, res) => {
    const {username, password } = req.body
  
    try {
      //check if there is a username with provided username
      const result = await db(`SELECT * FROM users WHERE username = '${username}'`)
      const user = result.data[0]
      console.log(user)
  
      if (user) {
        const user_id = user.id
        const correctPassword = await bcrypt.compare(password, user.password)
        
        // if(!correctPassword) throw new Error("Incorrect password!");
        if(!correctPassword) res.send({error: "Incorrect password"})
  
        // password correct
        const token = jwt.sign({user_id}, supersecret)
        res.send({ message: "Login successful, here is your token", token })
      } else {
        throw new Error("User does not exist")
      }
    } catch(e){
      res.status(400).send({message: e.message})
  
    }
  });
  
  router.get("/user-history", userShouldBeLoggedIn, (req, res) => {
    try {
      // check whether user is logged in (middleware/guard)
      // returns some private data
      res.send({message: "Here is your PROTECTED data"})
    } catch(e) {
      res.status(400).send({message: e.message})
    }
  
  });
  
  module.exports = router;
  