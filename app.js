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


//app.set('view engine', 'jade');

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

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});

// middleware function to check for logged-in users

var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
        res.redirect('/dashboard');
    } else {
        next();
    }    
};
*/

// signup, insert a document to the database

/*
app.use(function(req, res) {
    res.sendFile(__dirname + '/dist/index.html');
});
*/
app.get('/*', function (req, res, next) {
    res.sendFile(__dirname + '/dist/index.html');
});


/*
app.route('/signup')
    .get(sessionChecker, (req, res) => {
        res.sendFile(__dirname + '/public/signup.html');
    })
    .post((req, res) => {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        })
        .then(user => {
            req.session.user = user.dataValues;
            res.redirect('/dashboard');
        })
        .catch(error => {
            res.redirect('/signup');
        });
    });

*/


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
	            res.status(200).json(result);
	            console.log(result);
	            //res.redirect('/dashboard');
	        	db.close();
			});
        
            
        });
        
      
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



// for testing 




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