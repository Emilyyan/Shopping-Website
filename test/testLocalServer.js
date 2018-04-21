const chai = require('chai')
  , chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

var url = 'http://localhost:8081';


describe('test local server', function () {

  
  it('expected to return 200 status code and information of all users in database', function (done) {
    chai.request(url)
      .get('/get-users')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('expected to return 200 status code and information of all users in database', function (done) {
    chai.request(url)
      .get('/get-users')
      .type('form')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });
  
  it('expected to return 404 status code if wrong api url', function (done) {
    chai.request(url)
      .get('/get-user')
      .end(function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });


  it('expected to return 201 status code and the inserted user', function (done) {
    chai.request(url)
      .post('/register-users')
      .type('form')
      .set('content-type', 'application/x-www-form-urlencoded')
      .send({email: "testing@gmail.com", first_name: "post", last_name: "hihi", password: "123456"})
      .end(function (err, res) {
        expect(res).to.have.status(201);
        done();
      });
  });

 


  it('extected to return 404 if http method was wrong, no corresponding router', function (done) {
    chai.request(url)
      .get('/register-users')
      .send({email: "testing@gmail.com", first_name: "post", last_name: "hihi", password: "123456"})
      .end(function (err, res) {
        expect(res).to.have.status(404);
        done();
      });
  });

  it('expected to return 200 status code and information of all products in database', function (done) {
    chai.request(url)
      .get('/get-products')
      .end(function (err, res) {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('expected to return 200 status code and information of 6 products in database', function (done) {
    chai.request(url)
      .get('/get-products')
      .end(function (err, res, body) {
			res.on('data', function (chunk) {
    		expect(data).to.have.lengthOf(6);
    		console.log(data);
  		});
        done();
      });
  });


  it('expected to return 200 status code and information of 0 orders in database', function (done) {
    chai.request(url)
      .get('/get-orders')
      .end(function (err, res, body) {
			res.on('data', function (chunk) {
    		expect(data).to.be.an('object').that.is.empty;
    		console.log(data);
  		});
        done();
      });
  });


  it('expected to return 201 status code', function (done) {
    chai.request(url)
      .post('/get-orders')
      .type('form')
      .send({email: "testing@gmail.com", first_name: "post", last_name: "hihi", password: "123456"})
      .end(function (err, res) {
        expect(res).to.have.status(201);
        done();
      });
  });

  it('expected to return 400 status code', function (done) {
    chai.request(url)
      .post('/register-users')
      .type('form')
      .send({email: "testing@gmail.com", first_name: "post",  password: "123456"})
      .end(function (err, res) {
        expect(res).to.have.status(400);
        done();
      });
  });


});












