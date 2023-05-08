var express = require('express');
var router = express.Router();
var connection = require('../DataBase')

/* POST user insert. */

router.post('/', (req, res) => {
    let stmt = `INSERT INTO users (username, email, password, property) VALUES (?, ?, ?,?)`;
    let user = [req.body.username, req.body.email, req.body.password, 'user']
   
    connection.query(stmt, user, function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
      res.json(result);
    });
})

module.exports = router;
