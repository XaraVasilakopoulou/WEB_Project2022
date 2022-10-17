var express = require('express');
var router = express.Router();
const mariadb = require('mariadb');

const connection  = mariadb.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'project_web'
})


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
