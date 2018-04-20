var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
 
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("project");
    var myobj =  [
        { product_name: 'game1', price: '10', stock: '100', description: 'hi', img: 'shiba2.jpg'},
        { product_name: 'game2', price: '20', stock: '100', description: 'hihi', img: 'shiba2.jpg'},
        { product_name: 'game3', price: '30', stock: '100', description: 'hihihi', img: 'shiba2.jpg'},
        { product_name: 'game4', price: '40', stock: '100', description: 'hihihihi', img: 'shiba2.jpg'},
        { product_name: 'game5', price: '50', stock: '100', description: 'hihihihihi', img: 'shiba2.jpg'},
        { product_name: 'game6', price: '60', stock: '100', description: 'hihihihihihi', img: 'shiba2.jpg'},
        
       ];
    dbo.collection("products").insertMany(myobj, function(err, res) {
        if (err) throw err;
        console.log(res.insertedCount);
        db.close();
    });
});