var express = require('express');
var router = express.Router();
var connection = require('../DataBase')



/* GET users listing. */

router.post('/', (req, res) => {
    let stmtUsername = "UPDATE users SET username = ? WHERE email = ?";
    let stmtPassword = "UPDATE users SET password= ? WHERE email = ?";

    let username = [req.body.username, req.body.email]
    let password = [req.body.password, req.body.email]
   
    if(req.body.isUsernameChanged){
      connection.query(stmtUsername, username, function (err, result, fields) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
        res.json(result);
      });
    }

    /*if(req.body.isUsernameChanged){
      connection.query(stmtPassword, password, function (err, result, fields) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
        res.json(result);
      });
    }*/
})

module.exports = router;