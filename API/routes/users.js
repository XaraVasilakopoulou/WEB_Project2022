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

/* GET users listing. */

router.get('/', (req, res) => {
  connection.connect(function(err) {
   
    connection.query("SELECT * FROM users", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      res.json(result);
    });
  });
})

module.exports = router;
