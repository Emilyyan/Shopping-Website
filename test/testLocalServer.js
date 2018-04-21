const chai = require('chai')
  , chaiHttp = require('chai-http');

const expect = chai.expect;

chai.use(chaiHttp);

var url = 'http://localhost:8081';


describe('test local server', function () {

  
  it('expected to return return 200 status code and information of all users in database', function (done) {
    chai.request(url)
      .get('/get-users')
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

  


});