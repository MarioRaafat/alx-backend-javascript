const calculateNumber = require('./2-calcul_chai');
const chai = require('chai');
const expect = chai.expect;

describe('calculateNumber --> SUM', () => {
    it('should calculate two integers', () => {
        expect(calculateNumber('SUM', 1, 3)).to.equal(4);
    });

    it('should calculate integer and up one', () => {
        expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });

    it('should calculate down one and up the second', () => {
        expect(calculateNumber('SUM', 1.2, 3.7)).to.equal(5);
    });

    it('should calculate up both', () => {
        expect(calculateNumber('SUM', 1.5, 3.7)).to.equal(6);
    });

    it('should calculate rounded numbers', () => {
        expect(calculateNumber('SUM', 1.4, 3.7)).to.equal(5);
    });

    it('should calculate down both', () => {
        expect(calculateNumber('SUM', 1.4, 3.2)).to.equal(4);
    });
});

describe('calculateNumber -- SUBTRACT', () => {

    it('should calculate two integers', () => {
        expect(calculateNumber('SUBTRACT', 1, 3)).to.equal(-2);
    });

    it('should calculate integer and up one', () => {
        expect(calculateNumber('SUBTRACT', 1, 3.7)).to.equal(-3);
    });

    it('should calculate down one and up the second', () => {
        expect(calculateNumber('SUBTRACT', 1.2, 3.7)).to.equal(-3);
    });

    it('should calculate up both', () => {
        expect(calculateNumber('SUBTRACT', 1.5, 3.7)).to.equal(-2);
    });

    it('should calculate rounded numbers', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 3.7)).to.equal(-3);
    });

    it('should calculate down both', () => {
        expect(calculateNumber('SUBTRACT', 1.4, 3.2)).to.equal(-2);
    });
});

describe('calculateNumber -- DIVIDE', () => {

    it('should calculate down one and up the second', () => {
        expect(calculateNumber('DIVIDE', 1.2, 3.7)).to.equal(0.25);
    });

    it('should calculate up both', () => {
        expect(calculateNumber('DIVIDE', 1.5, 3.7)).to.equal(0.5);
    });

    it('should calculate rounded numbers', () => {
        expect(calculateNumber('DIVIDE', 1.4, 3.7)).to.equal(0.25);
    });

    it('should calculate down both', () => {
        expect(calculateNumber('DIVIDE', 1.4, 5.2)).to.equal(0.2);
    });

    it('should return Error', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });

    it('should return Error', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0.2)).to.equal('Error');
    });

    it('should calculate 0.5 divisor', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0.5)).to.equal(1);
    });

    it('should calculate 0.7 divisor', () => {
        expect(calculateNumber('DIVIDE', 1.4, 0.7)).to.equal(1);
    });

    it('should calculate zero div', () => {
        expect(calculateNumber('DIVIDE', 0, 3.7)).to.equal(0);
    });

    it('should return Error for zero divided by zero', () => {
        expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });

    it('should return Error for division by negative small number', () => {
        expect(calculateNumber('DIVIDE', 0, -0.2)).to.equal('Error');
    });

    it('should return Error for division by negative 0.5', () => {
        expect(calculateNumber('DIVIDE', 0, -0.5)).to.equal('Error');
    });

    it('should return zero for division by negative 0.7', () => {
        expect(calculateNumber('DIVIDE', 0, -0.7)).to.equal(0);
    });

    it('should return negative result for positive divided by negative integer', () => {
        expect(calculateNumber('DIVIDE', 3, -1)).to.equal(-3);
    });

    it('should return negative result for positive divided by negative rounded number', () => {
        expect(calculateNumber('DIVIDE', 3, -1.2)).to.equal(-3);
    });

    it('should return negative result for positive divided by negative rounded 1.5', () => {
        expect(calculateNumber('DIVIDE', 3, -1.5)).to.equal(-3);
    });

    it('should return positive result for negative divided by negative', () => {
        expect(calculateNumber('DIVIDE', -3.2, -1.7)).to.equal(1.5);
    });
});
