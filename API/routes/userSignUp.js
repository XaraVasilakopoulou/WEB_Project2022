var express = require('express');
var router = express.Router();
var connection = require('../DataBase')

/* POST user insert. */

router.get('/', (req, res) => {
    let stmt = `INSERT INTO users (username, email, password, speciality) VALUES (?, ?, ?,?)`;
    let user = [req.data.username, req.data.email, req.data.password, 'user']
   
    connection.query(stmt, user, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
})

module.exports = router;
