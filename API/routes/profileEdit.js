var express = require('express');
var router = express.Router();
var connection = require('../DataBase')


router.post('/', (req, res) => {
    let stmtName = `UPDATE  users SET username = ? WHERE email = ?`;
    let stmtPass = `UPDATE  users SET password = ? WHERE email = ?`;
    
    
    if(req.body.isUsernameChanged){

      let name = [req.body.username, req.body.email]

      connection.query(stmtName, name, function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
    });
  }

  if(req.body.isPasswordChanged){

    let pass = [req.body.password, req.body.email]

    connection.query(stmtPass, pass, function (err, result, fields) {
    if (err) throw err;
    console.log("1 record inserted");
    console.log(result);
  });
  
}
  res.json('all done');
})

module.exports = router;