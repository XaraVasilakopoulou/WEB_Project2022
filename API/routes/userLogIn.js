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