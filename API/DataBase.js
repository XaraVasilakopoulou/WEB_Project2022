var mysql=require('mysql');

const connection  = mysql.createConnection({
  connectionLimit : 10,
  host            : 'localhost',
  port            : '3308',
  user            : 'root',
  password        : '',
  database        : 'project_web'
})

module.exports = connection;