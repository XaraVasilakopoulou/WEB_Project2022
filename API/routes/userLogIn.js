var express = require('express');
var router = express.Router();
var connection = require('../DataBase')

/* POST login data. */

router.post('/', (req, res) => {
    let stmt = "SELECT * FROM users WHERE email = ? AND password = ?";
    let user = [req.body.email, req.body.password]

    connection.query(stmt, user, function (err, result) {
      if (err) throw err;
      if(result){
        res.json({login: true, user: result[0].property});
      }
      else{
        res.json({login: false});
      }
    });
})

module.exports = router;