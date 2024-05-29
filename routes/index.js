var express = require('express');
var router = express.Router();
const db = require("../model/helper");

/* GET every recommendation. */
router.get('/', async (req, res) =>{
  db('SELECT * FROM good_practices;')
  .then(results=>{
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

/* GET recommendation */
router.get('/:profile/:alreadycreated', async (req,res) => {
  try {
    const {profile,alreadycreated} = req.params;

    const result = await db(`SELECT * FROM good_practices WHERE profile = "${profile}" AND (alreadycreated="${alreadycreated}" OR alreadycreated="Doesn't matter");`);

    res.send(result.data)
  } catch(e){
    res.status(500).send({error:e.message})
  }
})

router.get('/:profile', async (req,res) => {
  try {
    const {profile} = req.params;

    const result = await db(`SELECT * FROM good_practices WHERE profile = "${profile}"`);

    res.send(result.data)
  } catch(e){
    res.status(500).send({error:e.message})
  }
})

module.exports = router;
