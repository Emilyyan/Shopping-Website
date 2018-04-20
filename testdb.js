


var express = require('express');
//var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

// get users information
app.get('/get-users', function (req, res) {
   

MongoClient.connect(url, function (err, db) {
		if(err) throw err;
        console.log("connected");
        var dbo = db.db("project");
        dbo.collection("users").find({}).toArray(function(err, result) { 
	  		if (err) throw err;
	  		res.jsonp(result);
	 		db.close();
        });
    });

});


var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("testing, address: http://%s:%s", host, port);
 
})