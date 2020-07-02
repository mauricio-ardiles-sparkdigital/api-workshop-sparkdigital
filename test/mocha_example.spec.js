const expect = require('chai').expect;
let chaiHttp = require('chai-http');
let chai = require('chai');
let should = chai.should();

chai.use(chaiHttp);
let server = 'http://localhost:9999/local';

describe('Mocha API test',function () {
    it('Verify that the server is running', (done) =>{
        chai.request(server)
            .get('/ping')
            .end((err,res)=>{
                res.should.have.status(200);
                res.type.should.be.equal('application/json');
                res.body.message.should.be.equal('Hello SparkDigital')
                done();
            });
    });
});
