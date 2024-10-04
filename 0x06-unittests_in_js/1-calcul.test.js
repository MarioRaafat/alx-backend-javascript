const calculateNumber = require('./1-calcul');
const assert = require('assert');

describe('calculateNumber --> SUM', () => {
    it('should calculate two integers', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
    });

    it('should calculate integer and up one', () => {
        assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });

    it('should calculate down one and up the second', () => {
        assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
    });

    it('should calculate up both', () => {
        assert.strictEqual(calculateNumber('SUM', 1.5, 3.7), 6);
    });

    it('should calculate rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.7), 5);
    });

    it('should calculate down both', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 3.2), 4);
    });
});


describe('calculateNumber -- SUBSTRACT', () => {

    it('should calculate two integers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3), -2);
    });

    it('should calculate integer and up one', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1, 3.7), -3);
    });

    it('should calculate down one and up the second', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);
    });

    it('should calculate up both', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 3.7), -2);
    });

    it('should calculate rounded numbers', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.7), -3);
    });

    it('should calculate down both', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 3.2), -2);
    });
});


describe('calculateNumber -- DIVIDE', () => {

    it('should calculate down one and up the second', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.25);
    });

    it('should calculate up both', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.5, 3.7), 0.5);
    });

    it('should calculate rounded numbers', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 3.7), 0.25);
    });

    it('should calculate down both', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 5.2), 0.2);
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), 'Error');
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.5), 1);
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.7), 1);
    });

    it('should calculate zero div', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 3.7), 0);
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, 0), 'Error');
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, -0.2), 'Error');
    });

    it('should return Error', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, -0.5), 'Error');
    });

    it('should return zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 0, -0.7), 0);
    });

    it('should return negative', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3, -1), -3);
    });

    it('should return negative', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3, -1.2), -3);
    });

    it('should return negative', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 3, -1.5), -3);
    });

    it('should return positive', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -3.2, -1.7), 1.5);
    });
});