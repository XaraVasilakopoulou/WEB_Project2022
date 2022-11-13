var express = require('express');
var router = express.Router();
var connection = require('../DataBase')



/* GET users listing. */

router.get('/', (req, res) => {
    let stmt = "UPDATE users SET username = ?, password= ? WHERE email = ?";
    let user = [req.body.username, req.body.password]
   
    connection.query(stmt, user, function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
      res.json(result);
  });
})

module.exports = router;