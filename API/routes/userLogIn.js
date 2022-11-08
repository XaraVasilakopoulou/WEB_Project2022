var express = require('express');
var router = express.Router();
var connection = require('../DataBase')

/* POST login data. */

router.post('/', (req, res) => {
    let stmt = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    let user = [req.data.username, req.data.email, req.data.password]
   console.log(req,res)
    /*connection.query(stmt, user, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });*/
})

module.exports = router;