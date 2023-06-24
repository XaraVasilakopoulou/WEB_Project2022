var express = require('express');
var router = express.Router();
var connection = require('../DataBase')



/* GET users listing. */

router.post('/', (req, res) => {
    let stmtUsername = "SELECT * FROM tokens WHERE email = ?";
   
      connection.query(stmtUsername, [req.body.email], function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      });
})

module.exports = router;