var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection  = mysql.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  database        : 'project_web'
})

connection.connect((err)=>{
  if(err){
    throw err;
  }
});

/* POST login data. */

router.get('/', (req, res) => {
  connection.connect(function(err) {
    let stmt = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;
    let user = [req.data.username, req.data.email, req.data.password]
   
    connection.query(stmt, user, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
})

module.exports = router;