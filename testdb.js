


var express = require('express');
//var router = express.Router();
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';



app.use(express.static('dist'));


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



app.get('/register-users', function (req, res) {
   
	 // 输出 JSON 格式
   var myobj = {
       first_name :req.query.firstName,
       last_name :req.query.lastName,
       email : res.query.email,
       password : res.query.password
   };
   console.log(myobj);
   res.end(JSON.stringify(myobj));


	MongoClient.connect(url, function (err, db) {
		if(err) throw err;
        console.log("connected");
        var dbo = db.db("project");
        dbo.collection("users").insertOne(myobj, function(err, res) {
        if (err) throw err;
        	console.log(res);
        db.close();
        });
    });

});


var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
 
  console.log("testing, address: http://%s:%s", host, port);
 
})