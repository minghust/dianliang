var express = require('express');
var router = express.Router();
var query = require("../controller/mysql_pool");
/* GET home page. */

router.get('/', function(req, res) {
  res.render('index', {ele: "none"});
});

router.post('/submit', function(req, res){
    let array = req.body.data;
    console.log(array);
    query("select ele from yijing where area=? and building=? and dorm=?", array, function(err, results, fields){
        if(results === null)
            console.log("results is null");
        else {
            var s = results[0].ele;
            console.log(s);
            res.send(s);
        }
    });

});
module.exports = router;
