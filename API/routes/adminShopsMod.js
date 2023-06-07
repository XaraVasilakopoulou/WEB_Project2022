var express = require('express');
var router = express.Router();
var connection = require('../DataBase')


router.post('/', (req, res) => {
    let stmtUpload = `INSERT INTO supermarkets (id, name, coordinates) VALUES (?, ?, POINT(?,?))`;
    let shopUpload = [req.body.shopID, req.body.shopName, req.body.shopCoorX,req.body.shopCoorY]

    let stmtUpdate = `UPDATE  supermarkets SET name = ?, coordinates= POINT(?,?) WHERE ID = ?`;
    let shopUpdate = [req.body.shopName, req.body.shopCoorX, req.body.shopCoorY, req.body.shopID]
    
    if(req.body.radioButton==="Upload"){
      connection.query(stmtUpload, shopUpload, function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
      res.json(result);
    });
  }

  if(req.body.radioButton==="Update"){
    connection.query(stmtUpdate, shopUpdate, function (err, result, fields) {
    if (err) throw err;
    console.log("1 record inserted");
    console.log(result);
    res.json(result);
  });
}
})

module.exports = router;