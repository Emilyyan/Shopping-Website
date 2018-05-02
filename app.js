var express = require('express');
var router = express.Router();
var app = express();
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var bcrypt = require('bcrypt');
var session = require('express-session');

app.use(require('body-parser').json());
app.use(require('body-parser').urlencoded({
  extended: true
}));
app.use(express.static('dist'));


//app.use(cookieParser());

/*
app.use(session({
    key: 'user_sid',
    secret: 'hihihi',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 600000
    }
}));
*/


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

        /*
			bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
			  // Store hash in your password DB.
			});

			// Load hash from your password DB.
			bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
			    // res == true
			});
			bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
			    // res == false
			});
        */
        console.log(myobj);
        bcrypt.hash(myobj.password, 10, function(err, hash) {
			  myobj.password = hash;
			  console.log(hash);
			  console.log(myobj.password);
			  // add find() to check if existed
			  dbo.collection("users").insertOne(myobj, function(err, result) {
	            if(err)
	            	throw err;
	            res.redirect('/dashboard');
	        	db.close();
			});
        
            
        });
        }
      
    });

});



app.post('/login-users', function (req, res) {
   var myobj = req.body;
   
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

        /*
			bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
			  // Store hash in your password DB.
			});

			// Load hash from your password DB.
			bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
			    // res == true
			});
			bcrypt.compare(someOtherPlaintextPassword, hash, function(err, res) {
			    // res == false
			});
        */
        console.log("query:");
        console.log(myobj.email);
	   	var whereStr = {'email':myobj.email};  // 查询条件
	    dbo.collection("users").find(whereStr).toArray(function(err, result) {
	        if (err) throw err;
	        	console.log(result);
	            res.status(200).json(result[0]);
	            bcrypt.compare(myobj.password, result[0].password, function(err, res) {
	            	console.log(res);
			    	//if(res)
			    	//	res.redirect('/dashboard');
			    	//else
			    	//	res.redirect('/login-users');
				});
	        	db.close();
	    	});
		});
        
            
       
        
      
    });

/*

// route for user Login
app.route('/login')
    .get(sessionChecker, (req, res) => {
        res.sendFile(__dirname + '/public/login.html');
    })
    .post((req, res) => {
        var username = req.body.username,
            password = req.body.password;

        User.findOne({ where: { username: username } }).then(function (user) {
            if (!user) {
                res.redirect('/login');
            } else if (!user.validPassword(password)) {
                res.redirect('/login');
            } else {
                req.session.user = user.dataValues;
                res.redirect('/dashboard');
            }
        });
    });


// route for user's dashboard
app.get('/dashboard', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.sendFile(__dirname + '/public/dashboard.html');
    } else {
        res.redirect('/login');
    }
});


// route for user logout
app.get('/logout', (req, res) => {
    if (req.session.user && req.cookies.user_sid) {
        res.clearCookie('user_sid');
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});


*/


var server = app.listen(8081, function () {
 
  var host = server.address().address;
  var port = server.address().port;
  console.log(host);
 
  console.log("testing, address: http://%s:%s", host, port);
 
})