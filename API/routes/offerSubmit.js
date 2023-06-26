var express = require('express');
var router = express.Router();
var connection = require('../DataBase')


router.post('/', (req, res) => {
    let stmtSelect = `Select  id FROM offers WHERE name_supermarket = ? AND name_product = ?`;
    let stmtUpdate = `UPDATE  offers SET price = ?, date = ? WHERE id=?`;
    let stmtInsert = `INSERT INTO offers (id,name_product,name_supermarket,price,date) VALUES (?,?,?,?,?)`;

    let select = [req.body.supermarket, req.body.product]

    connection.query(stmtSelect, select, function (err, result, fields) {
      if (err) throw err;
      if(result.length===1){

        let update = [req.body.price, req.body.date, result[0].id]

        connection.query(stmtUpdate, update, function (err, result, fields) {
        if (err) throw err;
        console.log("1 record updated");
        console.log(result);
      });
      connection.query(`UPDATE offers_details SET likes=0, 	dislikes=0, stock=1 WHERE id=?`, [result[0].id], function (err, result, fields) {
        if (err) throw err;
        console.log("1 record updated");
        console.log(result);
      });}
    
      else{
        connection.query(`Select COUNT(*) as id FROM offers`, function (err, result, fields) {
        let insert = [result[0].id+1,req.body.product, req.body.supermarket, req.body.price, req.body.date]
    
        connection.query(stmtInsert, insert, function (err, result, fields) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
      });
      connection.query(`INSERT INTO offers_details (id,likes,dislikes,stock) VALUES (?,0,0,1)`, [result[0].id+1], function (err, result, fields) {
        if (err) throw err;
        console.log("1 record updated");
        console.log(result);
      })
    })
    }
    });
    
    res.json('ok')
})

module.exports = router;