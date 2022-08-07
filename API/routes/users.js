var express = require('express');
var router = express.Router();
const mysql = require('mysql');

const connection  = mysql.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  database        : 'web20212022'
})

connection.connect((err)=>{
  if(err){
    throw err;
  }
  console.log('connect')
});

/* GET users listing. */

router.get('/', (req, res) => {
  pool.getConnection((err, connection) => {
      if(err) throw err
      console.log('connected as id ' + connection.threadId)
      connection.query('SELECT * from web20212022.users', (err, rows) => {
          connection.release()

          if (!err) {
              res.send(rows)
          } else {
              console.log(err)
          }

          // if(err) throw err
          console.log('The data from beer table are: \n', rows)
      })
  })
})

module.exports = router;
