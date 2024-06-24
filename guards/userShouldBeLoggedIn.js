const jwt = require('jsonwebtoken');
require("dotenv").config();
const supersecret = process.env.SUPER_SECRET;

function userShouldBeLoggedIn(req, res, next){
    // grab token from headers
    const token = req.headers["authorization"].replace(/^Bearer\s/, '')
    if(!token) {// user is not logged in
        console.log('Token is missing')
        res.status(401).send({"message": "Please provide a token!"})
    } else {
        // verify token
        jwt.verify(token, supersecret, function(err, decoded){
            //if there is an error
            if (err) {
                res.status(401).send({message: err.message})
            } else {
                req.userId = decoded.user_id
                next()
            }
        })
    }
}   

module.exports = userShouldBeLoggedIn