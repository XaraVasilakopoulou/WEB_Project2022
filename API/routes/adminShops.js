var express = require('express');
var router = express.Router();
var connection = require('../DataBase')

class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  
    toSqlString() {
      return `POINT(${this.x},${this.y})`;
    }
  }

router.post('/', (req, res) => {
    let stmtUpload = `INSERT INTO supermarkets (id, name, coordinates) VALUES ?`;
    let shopUpload = []
    for(const i=0;i<2;i++){
      shopUpload.push([req.body.file[i].id, req.body.file[i].properties.name, new Point(req.body.file[i].geometry.coordinates[0], req.body.file[i].geometry.coordinates[1])])
    }
    connection.query(stmtUpload, [shopUpload], function (err, result, fields) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
        res.json(result);
      });

 

})

module.exports = router;