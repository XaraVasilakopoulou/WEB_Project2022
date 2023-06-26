var express = require('express');
var router = express.Router();
var connection = require('../DataBase')


router.post('/', (req, res) => {
    let stmtUpload = `INSERT INTO products (id, name, category, subcategory) VALUES ?`;
    let stmtUploadOffers = `INSERT INTO offers (id, name_product, name_supermarket, price,date,email) VALUES ?`
    if(req.body.product){
      if(req.body.delete){
        connection.query(`DELETE FROM products`, function (err, result, fields) {
          if (err) throw err;
          console.log("all deleted");
        });
      }
      else{
        connection.query(`Select COUNT(*) as id FROM offers`, function (err, result, fields) {
          let id = result[0].id+1
          let shopUpload = []
      for(let i=0;i<Object.keys(req.body.file).length;i++){
        shopUpload.push([id, req.body.file[i].name, req.body.file[i].name_product, req.body.file[i].name_supermarket, req.body.file[i].price, req.body.file[i].date,null])
        id= id+1
      }
  
        connection.query(stmtUploadOffers, [shopUpload], function (err, result, fields) {
        if (err) throw err;
        console.log("1 record inserted");
        console.log(result);
        res.json(result);
      });
    })
    }
    }
    else{
    if(req.body.delete){
      connection.query(`DELETE FROM products`, function (err, result, fields) {
        if (err) throw err;
        console.log("all deleted");
      });
    }
    else{
    let shopUpload = []
    for(let i=0;i<Object.keys(req.body.file).length;i++){
      shopUpload.push([req.body.file[i].id, req.body.file[i].name, req.body.file[i].category, req.body.file[i].subcategory])
    }

      connection.query(stmtUpload, [shopUpload], function (err, result, fields) {
      if (err) throw err;
      console.log("1 record inserted");
      console.log(result);
      res.json(result);
    });
  }
    }

})

module.exports = router;