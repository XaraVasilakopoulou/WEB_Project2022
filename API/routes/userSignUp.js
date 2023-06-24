var express = require('express');
var router = express.Router();
var connection = require('../DataBase')

/* POST user insert. */

router.post('/', (req, res) => {
    let stmt = `INSERT INTO users (username, email, password, property) VALUES (?, ?, ?,?)`;
    let user = [req.body.username, req.body.email, req.body.password, 'user']
   
    let stmtToken = `INSERT INTO tokens (email, score_total, token_month, score_month) VALUES (?, 0, 100,0)`;
    connection.query(stmt, user, function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
      res.json(result);
    });

    connection.query(stmtToken, [req.body.email], function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
    });
})

module.exports = router;
