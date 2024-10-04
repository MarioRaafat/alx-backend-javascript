const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function() {

    it('should log to the console the right output', function() {
        const consoleSpy = sinon.spy(console, 'log');
        sendPaymentRequestToApi(100, 20);
        expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnce).to.be.true;
        calculateNumberSpy.restore();
    });

    it('should call Utils.calculateNumber with the right arguments', function() {
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(calculateNumberSpy.calledOnceWith('SUM', 100, 20)).to.be.true;
        calculateNumberSpy.restore();
    });
})