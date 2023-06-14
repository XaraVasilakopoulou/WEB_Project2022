var express = require('express');
var router = express.Router();
var connection = require('../DataBase')


router.post('/', (req, res) => {
    let stmtUpload = `INSERT INTO products (id, name, category, subcategory) VALUES ?`;
    
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
  
})

module.exports = router;