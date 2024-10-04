const chai = require('chai');
const expect = chai.expect;
const request = require('request');

describe('Testing API', function() {
    it('GET /', function(done) {
        const url = 'http://localhost:7865';

        request.get(url, (error, response, body) => {
            expect(response.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});
