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
  
      res.send({ message: "Registration successful" });
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
        const user_id = user.user_id
        const correctPassword = await bcrypt.compare(password, user.password)
        
        // if(!correctPassword) throw new Error("Incorrect password!");
        if(!correctPassword) res.send({error: "Incorrect password"})
  
        // password correct
        const token = jwt.sign({user_id: user_id}, supersecret)
        console.log(token)
        res.send({ message: "Login successful, here is your token", token })
      } else {
        throw new Error("User does not exist")
      }
    } catch(e){
      res.status(400).send({message: e.message})
  
    }
  });
  
  router.get("/user-history", userShouldBeLoggedIn, async (req, res) => {
    try {
      // returns some private data
      const query = `SELECT * FROM history WHERE user_id = ${req.userId};`
      const results = await db(query)
      res.status(200).send(results.data);
    } catch(e) {
      res.status(400).send({message: e.message})
    }
  
  });

  router.post('/user-history', userShouldBeLoggedIn, async (req,res)=>{
    try {
      // const date = req.body.date
      const query =   `INSERT INTO history (url, date, score, user_id)
                      VALUES ('${req.body.url}', '${req.body.date}', '${req.body.score}', ${req.userId})`
      await db(query)
      
      const results = await db('SELECT * FROM history');
      res.status(201).send(results);
      
    } catch(e){
      res.status(500).send({error:e.message})
    }
  })
  
  module.exports = router;
  