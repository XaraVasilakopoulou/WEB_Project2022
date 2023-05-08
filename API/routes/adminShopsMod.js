var express = require('express');
var router = express.Router();
//var connection = require('../DataBase')


router.post('/', (req, res) => {
    if (err) throw err;
    console.log(req.body);
})

module.exports = router;