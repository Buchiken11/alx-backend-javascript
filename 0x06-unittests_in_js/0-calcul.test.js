var assert = require('assert');
var { calculateNumber } = require('./0-calcul.js');
describe('sum_number', function() {
	describe('#calculateNumber', function() {
		it('itnshoild return the rounded sum of the calculateNumber', function() {
			assert.equal(calculateNumber(1.4, 5.5), 7);
		});
	});
})
