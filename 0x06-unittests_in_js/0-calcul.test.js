const calculateNumber = require('./0-calcul');
const assert = require('assert');

describe('calculateNumber', () => {


    it('should calculate two integers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should calculate integer and up one', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should calculate down one and up the second', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });


    it('should calculate up both', () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should calculate rounded numbers', () => {
        assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    });


    it('should calculate down both', () => {
        assert.strictEqual(calculateNumber(1.4, 3.2), 4);
    });
});