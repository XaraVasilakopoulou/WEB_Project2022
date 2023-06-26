var express = require('express');
var router = express.Router();
var connection = require('../DataBase')



/* GET users listing. */

router.get('/', (req, res) => {
    connection.query("SELECT DISTINCT name FROM supermarkets", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
  });
})

module.exports = router;