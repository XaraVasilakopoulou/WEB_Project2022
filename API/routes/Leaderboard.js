var express = require('express');
var router = express.Router();
var connection = require('../DataBase')



/* GET users listing. */

router.get('/', (req, res) => {
    connection.query("SELECT * FROM users INNER JOIN tokens ON users.email = tokens.email ORDER BY score_total DESC", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
  });
})

module.exports = router;