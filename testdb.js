


var express = require('express');
var router = express.Router();
var app = express();
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(express.static('dist'));




// for testing 
app.get('/get-users', function (req, res) {   

  MongoClient.connect(url, function (err, db) {
  		if(err) throw err;
          console.log("connected");
          var dbo = db.db("project");
          dbo.collection("users").find({}).toArray(function(err, result) { 
  	  		if (err) throw err;
  	  		   res.status(200).json(result);
  	 		  db.close();
          });
      });

});


// for testing 
app.get('/get-products', function (req, res) {   

  MongoClient.connect(url, function (err, db) {
      if(err) throw err;
          console.log("connected");
          var dbo = db.db("project");
          dbo.collection("products").find({}).toArray(function(err, result) { 
          if (err) throw err;
             res.status(200).json(result);
          db.close();
          });
      });

});


// for testing 
app.get('/get-orders', function (req, res) {   

  MongoClient.connect(url, function (err, db) {
      if(err) throw err;
          console.log("connected");
          var dbo = db.db("project");
          dbo.collection("orders").find({}).toArray(function(err, result) { 
          if (err) throw err;
             res.status(200).json(result);
          db.close();
          });
      });

});


app.post('/get-orders', function (req, res) {
  var myobj = req.body;
   /*
   var myobj = {
       first_name :req.req.firstName,
       last_name :req.req.lastName,
       email : res.req.email,
       password : res.req.password
   };
   */
        res.status(201).json(myobj);
});






// signup, insert a document to the database

app.post('/register-users', function (req, res) {
   var myobj = req.body;
   var count = Object.keys(myobj).length;
   console.log(count);
   /*
   var myobj = {
       first_name :req.req.firstName,
       last_name :req.req.lastName,
       email : res.req.email,
       password : res.req.password
   };
   */
   

  MongoClient.connect(url, function (err, db) {
    if(err) throw err;
        console.log("connected");
        var dbo = db.db("project");
        if(count < 4){
             res.status(400).json(myobj);
        }
        else {
            dbo.collection("users").insertOne(myobj, function(err, result) {
            res.status(201).json(myobj);
        db.close();
        });
        }
      
    });

});








var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
 
  console.log("testing, address: http://%s:%s", host, port);
 
})