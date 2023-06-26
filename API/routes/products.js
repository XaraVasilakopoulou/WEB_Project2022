var express = require('express');
var router = express.Router();
var connection = require('../DataBase')



/* GET users listing. */

router.get('/', (req, res) => {
    connection.query("SELECT * FROM offers INNER JOIN offers_details ON offers.id = offers_details.id", function (err, result, fields) {
      if (err) throw err;
      res.json(result);
  });
})

module.exports = router;